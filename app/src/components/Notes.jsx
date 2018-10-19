import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import { EditorState, convertToRaw } from 'draft-js';

import {
  setNoteText,
  setNoteTitle,
  setNoteTag,
  updateNoteEditor
} from '../actions/AppActions';

import NotesMenu from './NotesMenu.jsx';
import NoteEditor from './NoteEditor.jsx';

class Notes extends Component {
  getTagName() {
    if (this.props.noteTag == -1) return '';
    return '#' + this.props.tags.find(tag => tag.id == this.props.noteTag).name;
  }

  getOptions() {
    return this.props.tags.map(tag => ({
      value: tag.id,
      label: '#' + tag.name
    }));
  }

  getNoteContent() {
    return (
      <div className="notes">
        <input
          className="note__title"
          value={this.props.noteName}
          ref="titleInput"
          onChange={event => {
            this.props.setNoteTitle(
              this.props.selectedNote,
              event.target.value
            );
          }}
        />
        {this.props.selectedNote == -1 ? (
          ''
        ) : (
          <Select
            name="notes-tag-select"
            value={this.props.noteTag}
            onChange={selectedOption => {
              this.props.setNoteTag(
                this.props.selectedNote,
                selectedOption.value
              );
            }}
            options={this.getOptions()}
          />
        )}
        <NotesMenu />
        <NoteEditor
          id={this.props.selectedNote}
          initialValue={this.props.noteText}
          editorState={this.props.editorState}
          selectionState={this.props.selectionState}
          setNoteText={this.props.setNoteText}
          updateNoteEditor={this.props.updateNoteEditor}
        />
      </div>
    );
  }

  render() {
    return this.getNoteContent();
  }
}
const mapStateToProps = state => {
  let selectedNoteVal = state.notes.find(note => {
    return note.id == state.selectedNote;
  });
  if (selectedNoteVal === undefined)
    selectedNoteVal = {
      id: -1,
      name: '',
      tag: -1,
      text: convertToRaw(EditorState.createEmpty().getCurrentContent())
    };
  return {
    selectedNote: selectedNoteVal.id,
    noteName: selectedNoteVal.name,
    noteTag: selectedNoteVal.tag,
    noteText: selectedNoteVal.text,
    tags: state.tags,
    editorState: state.editorState,
    selectionState: state.selectionState
  };
};
export default connect(
  mapStateToProps,
  {
    setNoteText,
    setNoteTitle,
    setNoteTag,
    updateNoteEditor
  }
)(Notes);
