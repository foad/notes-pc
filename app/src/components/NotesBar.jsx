import React, { Component } from 'react';
import { connect } from 'react-redux';

import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';

import {
  createNote,
  setSelectedNote,
  searchNotes,
  deleteNote,
  setSorting
} from '../actions/AppActions';

import SearchBar from './SearchBar.jsx';
import NoteSort from './NoteSort.jsx';

class NotesBar extends Component {
  getVisibleNotes() {
    const notes = [...this.props.notes];
    if (this.props.selectedTag === -1)
      return notes.filter(note => this.isNoteInSearch(note));
    return notes.filter(
      note => note.tag === this.props.selectedTag && this.isNoteInSearch(note)
    );
  }

  isNoteInSearch(note) {
    const query = this.props.searchQuery;
    const noteText = convertFromRaw(note.text).getPlainText();
    return note.name.includes(query) || noteText.includes(query);
  }

  sortNotes(notes) {
    if (this.props.sortMethod === 'name') {
      return notes.sort((noteA, noteB) => {
        if (this.props.sortAscending) return noteA.name > noteB.name;
        return noteA.name < noteB.name;
      });
    }
    if (this.props.sortMethod === 'date') {
      return notes.sort((noteA, noteB) => {
        const noteADate = new Date(noteA.date);
        const noteBDate = new Date(noteB.date);
        if (this.props.sortAscending) return noteADate > noteBDate;
        return noteADate < noteBDate;
      });
    }
    return notes;
  }

  getNoteSummaries = () => {
    const visibleNotes = this.getVisibleNotes();
    const sortedNotes = this.sortNotes(visibleNotes);

    const notesummaries = sortedNotes.map(note => {
      const noteText = convertFromRaw(note.text).getPlainText();
      return (
        <div
          key={note.id}
          className={
            'notesummary ' +
            (note.id === this.props.selectedNote ? 'selected' : '')
          }
          onClick={() => {
            this.props.setSelectedNote(note.id);
          }}
        >
          <h3>{note.name == '' ? '[No title]' : note.name}</h3>
          <p>{noteText == '' ? '[No content]' : noteText}</p>
          <span className="notesummary__date">
            {new Date(note.date).toLocaleString('en-GB')}
          </span>
          <span
            className="notesummary__button"
            onClick={() => this.props.deleteNote(note.id)}
          >
            ×
          </span>
        </div>
      );
    });

    return <div className="notesummaries">{notesummaries}</div>;
  };

  getLatestNote(notes) {
    let largestID = -1;
    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id > largestID) largestID = notes[i].id;
    }
    return largestID;
  }

  newNote = () => {
    let date = new Date().toISOString();
    date = date.replace('T', ' ');
    date = date.replace('Z', '');
    let note = {
      name: '',
      tag: this.props.selectedTag,
      date: date,
      text: convertToRaw(EditorState.createEmpty().getCurrentContent())
    };
    this.props.createNote(note);
  };

  getSelectedTagName() {
    const tag = this.props.tags.filter(
      tag => tag.id === this.props.selectedTag
    )[0];
    if (tag) {
      if (tag.name !== '') return tag.name;
      return '[untitled]';
    }
    return 'All Notes';
  }

  render() {
    return (
      <div className="notesbar">
        <h2>
          {this.getSelectedTagName()}
          <span className="icon__button" onClick={this.newNote}>
            +
          </span>
        </h2>
        <SearchBar searchNotes={this.props.searchNotes} />
        <NoteSort
          sortMethod={this.props.sortMethod}
          sortAscending={this.props.sortAscending}
          setSorting={this.props.setSorting}
        />
        {this.getNoteSummaries()}
      </div>
    );
  }
}
const mapStateToProps = state => {
  let noteTags = state.notes.map(n => n.tag);
  return {
    selectedTag: state.selectedTag,
    tags: state.tags,
    notes: state.notes,
    selectedNote: state.selectedNote,
    noteTags,
    searchQuery: state.searchQuery,
    sortMethod: state.sortMethod,
    sortAscending: state.sortAscending
  };
};
export default connect(
  mapStateToProps,
  {
    createNote,
    setSelectedNote,
    searchNotes,
    deleteNote,
    setSorting
  }
)(NotesBar);
