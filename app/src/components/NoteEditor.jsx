import React, {Component} from 'react'

import AppActions from '../actions/AppActions'

import {Editor, EditorState, ContentState, EditorChangeType} from 'draft-js'

export default class NoteEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(ContentState.createFromText(props.initialValue)),
            id: props.id,
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(editorState) {
        AppActions.setNoteText(this.state.id, editorState.getCurrentContent().getPlainText())
        this.setState({editorState});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editorState: EditorState.createWithContent(ContentState.createFromText(nextProps.initialValue)),
            id: nextProps.id,
        })
    }

    render () {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        )
    }
}
