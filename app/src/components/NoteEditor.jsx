import React, {Component} from 'react'

import AppActions from '../actions/AppActions'

import {Editor, EditorState, ContentState, EditorChangeType} from 'draft-js'

export default class NoteEditor extends Component {

    constructor(props) {
        super(props);
        const initialEditorState = EditorState.createWithContent(ContentState.createFromText(props.initialValue))
        this.state = {
            editorState: initialEditorState,
            id: props.id,
        };
        this.onChange = this.onChange.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    onBlur() {
        AppActions.setNoteText(this.state.id, this.state.editorState.getCurrentContent().getPlainText())
    }

    onChange(editorState) {
        this.setState({editorState})
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            editorState: EditorState.createWithContent(ContentState.createFromText(nextProps.initialValue)),
            id: nextProps.id
        })
    }

    render () {
        return (
            <Editor editorState={this.state.editorState} onBlur={this.onBlur} onChange={this.onChange} />
        )
    }
}
