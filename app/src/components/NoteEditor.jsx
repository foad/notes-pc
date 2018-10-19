import React, { Component } from 'react';

import {
  Editor,
  EditorState,
  ContentState,
  EditorChangeType,
  SelectionState,
  RichUtils,
  convertFromRaw,
  convertToRaw
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
      convertToRaw(this.state.editorState.getCurrentContent())
    );
  }

  onChange(editorState) {
    this.props.updateNoteEditor(
      this.state.id,
      convertToRaw(editorState.getCurrentContent()),
      editorState,
      editorState.getSelection()
    );
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.id != this.state.id) {
      this.setState({
        ...this.state,
        editorState: EditorState.createWithContent(
          convertFromRaw(nextProps.initialValue)
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

  handleKeyCommand(command, editorState) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) this.onChange(newState);
  }

  render() {
    return (
      <Editor
        editorState={EditorState.acceptSelection(
          this.state.editorState,
          this.state.selectionState
        )}
        onBlur={this.onBlur}
        handleKeyCommand={this.handleKeyCommand}
        onChange={this.onChange}
      />
    );
  }
}
