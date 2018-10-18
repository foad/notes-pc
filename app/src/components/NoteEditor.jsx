import React, { Component } from 'react';

import {
  Editor,
  EditorState,
  ContentState,
  EditorChangeType,
  SelectionState
} from 'draft-js';

export default class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: props.editorState,
      selectionState: props.selectionState,
      id: props.id
    };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur() {
    this.props.setNoteText(
      this.state.id,
      this.state.editorState.getCurrentContent().getPlainText()
    );
  }

  onChange(editorState) {
    this.props.updateNoteEditor(
      this.state.id,
      editorState.getCurrentContent().getPlainText(),
      editorState,
      editorState.getSelection()
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != this.state.id) {
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
          this.state.editorState,
          this.state.selectionState
        )}
        onBlur={this.onBlur}
        onChange={this.onChange}
      />
    );
  }
}
