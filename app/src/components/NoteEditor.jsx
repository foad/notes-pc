import React, {Component} from 'react'

import {Editor, EditorState, ContentState, EditorChangeType} from 'draft-js'

export default class NoteEditor extends Component {

    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createWithContent(ContentState.createFromText(props.initialValue)),
        };
        this.onChange = (editorState) => this.setState({editorState});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            editorState: EditorState.createWithContent(ContentState.createFromText(nextProps.initialValue))
        })
    }

    render () {
        return (
            <Editor editorState={this.state.editorState} onChange={this.onChange} />
        )
    }
}
