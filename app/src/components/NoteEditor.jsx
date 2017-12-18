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
            selection: initialEditorState.getSelection()
        };
        this.onChange = this.onChange.bind(this)
    }

    onChange(editorState) {
        AppActions.updateSelection(editorState.getSelection())
        AppActions.setNoteText(this.state.id, editorState.getCurrentContent().getPlainText())
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ...this.state,
            editorState: EditorState.createWithContent(ContentState.createFromText(nextProps.initialValue)),
            id: nextProps.id,
            selection: nextProps.selection || this.state.editorState.getSelection(),
        })
    }

    render () {
        return (
            <Editor editorState={EditorState.forceSelection(this.state.editorState, this.state.selection)} onChange={this.onChange} />
        )
    }
}
