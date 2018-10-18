import React, { Component } from 'react';

import {
  Editor,
  EditorState,
  ContentState,
  EditorChangeType,
  SelectionState
} from 'draft-js';

export default class NoteEditor extends Component {
  onBlur() {
    this.props.setNoteText(
      this.props.id,
      this.props.editorState.getCurrentContent().getPlainText()
    );
  }

  onChange(editorState) {
    this.props.updateNoteEditor(
      this.props.id,
      editorState.getCurrentContent().getPlainText(),
      editorState,
      editorState.getSelection()
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != this.props.id) {
      this.setState({
        ...this.state,
        editorState: EditorState.createWithContent(
          ContentState.createFromText(nextProps.initialValue)
        ),
        selectionState: SelectionState.createEmpty(),
        id: nextProps.id
      });
    } else {
      this.setState({
        ...this.state,
        editorState: nextProps.editorState,
        selectionState: nextProps.selectionState,
        id: nextProps.id
      });
    }
  }

  render() {
    return (
      <Editor
        editorState={EditorState.acceptSelection(
          this.props.editorState,
          this.props.selectionState
        )}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}
