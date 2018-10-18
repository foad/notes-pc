import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createNote, setSelectedNote } from '../actions/AppActions';

import SearchBar from './SearchBar.jsx';
import NoteSort from './NoteSort.jsx';

class NotesBar extends Component {
  getTaggedNotes() {
    const notes = [...this.props.notes];
    if (this.props.selectedTag === -1) return notes;
    return notes.filter(notes => notes.tag == this.props.selectedTag);
  }

  getNoteSummaries = () => {
    let taggedNotes = this.getTaggedNotes();

    const notesummaries = taggedNotes.map(note => {
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
          <p>{note.text == '' ? '[No content]' : note.text}</p>
          <span className="notesummary__date">
            {new Date(note.date).toLocaleString('en-GB')}
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
      text: ''
    };
    this.props.createNote(note);
  };

  getSelectedTagName() {
    const tag = this.props.tags.filter(
      tag => tag.id === this.props.selectedTag
    )[0];
    if (tag) return tag.name;
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
        <SearchBar />
        <NoteSort />
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
    noteTags
  };
};
export default connect(
  mapStateToProps,
  {
    createNote,
    setSelectedNote
  }
)(NotesBar);
