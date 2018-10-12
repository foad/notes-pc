import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';

import AppActions from '../actions/AppActions';

import NotesMenu from './NotesMenu.jsx';
import NoteEditor from './NoteEditor.jsx';

class Notes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedNote: props.selectedNote,
      noteName: props.noteName,
      noteTag: props.noteTag,
      noteText: props.noteText,
      tags: props.tags,
      editorState: props.editorState,
      selectionState: props.selectionState
    };

    this.getNoteContent = this.getNoteContent.bind(this);
    this.getTagName = this.getTagName.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedNote: nextProps.selectedNote,
      noteName: nextProps.noteName,
      noteTag: nextProps.noteTag,
      noteText: nextProps.noteText,
      tags: nextProps.tags,
      editorState: nextProps.editorState,
      selectionState: nextProps.selectionState
    });
  }

  getTagName() {
    if (this.state.noteTag == -1) return '';
    return '#' + this.state.tags.find(tag => tag.id == this.state.noteTag).name;
  }

  handleTitleChange(event) {
    AppActions.updateNoteTitle(this.state.selectedNote, event.target.value);
  }

  handleSelectChange(selectedOption) {
    AppActions.updateNoteTag(this.state.selectedNote, selectedOption.value);
  }

  getOptions() {
    let options = [];
    for (let i = 0; i < this.state.tags.length; i++) {
      options.push({
        value: this.state.tags[i].id,
        label: '#' + this.state.tags[i].name
      });
    }
    return options;
  }

  getNoteContent() {
    return (
      <div className="notes">
        <input
          className="note__title"
          value={this.state.noteName}
          ref="titleInput"
          onChange={this.handleTitleChange.bind(this)}
        />
        {this.state.selectedNote == -1 ? (
          ''
        ) : (
          <Select
            name="notes-tag-select"
            value={this.state.noteTag}
            onChange={this.handleSelectChange.bind(this)}
            options={this.getOptions()}
          />
        )}
        <NotesMenu />
        <NoteEditor
          id={this.state.selectedNote}
          initialValue={this.state.noteText}
          editorState={this.state.editorState}
          selectionState={this.state.selectionState}
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
    selectedNoteVal = { id: -1, name: '', tag: -1, text: '' };
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
export default connect(mapStateToProps)(Notes);
