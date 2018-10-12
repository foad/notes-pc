import React, { Component } from "react";
import { connect } from "react-redux";

import AppActions from "../actions/AppActions";

import SearchBar from "./SearchBar.jsx";
import NoteSort from "./NoteSort.jsx";

class NotesBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTag: props.selectedTag,
      selectedNote: props.selectedNote,
      tags: props.tags,
      notes: props.notes,
      noteTags: props.noteTags
    };

    this.getNoteSummaries = this.getNoteSummaries.bind(this);
    this.getTaggedNotes = this.getTaggedNotes.bind(this);
    this.newNote = this.newNote.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...this.state,
      selectedTag: nextProps.selectedTag,
      tags: nextProps.tags,
      notes: nextProps.notes,
      selectedNote: nextProps.selectedNote,
      noteTags: nextProps.noteTags
    });
  }

  getTaggedNotes() {
    const notes = [...this.state.notes];
    if (this.state.selectedTag == -1) return notes;
    return notes.filter(notes => notes.tag == this.state.selectedTag);
  }

  setSelectedNote(id) {
    AppActions.setSelectedNote(id);
  }

  getNoteSummaries() {
    var taggedNotes = this.getTaggedNotes();

    var notesummaries = [];

    for (var i = 0; i < taggedNotes.length; i++) {
      var clickHandler = this.setSelectedNote.bind(this, taggedNotes[i].id);

      notesummaries.push(
        <div
          key={taggedNotes[i].id}
          className={
            "notesummary" +
            (taggedNotes[i].id == this.state.selectedNote ? " selected" : "")
          }
          onClick={clickHandler}
        >
          <h3>
            {taggedNotes[i].name == "" ? "[No title]" : taggedNotes[i].name}
          </h3>
          <p>
            {taggedNotes[i].text == "" ? "[No content]" : taggedNotes[i].text}
          </p>
          <span className="notesummary__date">
            {new Date(taggedNotes[i].date).toLocaleString("en-GB")}
          </span>
        </div>
      );
    }

    return <div className="notesummaries">{notesummaries}</div>;
  }

  getLatestNote(notes) {
    var largestID = -1;
    for (var i = 0; i < notes.length; i++) {
      if (notes[i].id > largestID) largestID = notes[i].id;
    }
    return largestID;
  }

  newNote() {
    var noteIndex = this.getLatestNote(this.state.notes) + 1;
    var date = new Date().toISOString();
    date = date.replace("T", " ");
    date = date.replace("Z", "");
    var note = {
      id: noteIndex,
      name: "",
      tag: this.state.selectedTag,
      date: date,
      text: ""
    };
    AppActions.createNewNote(note);
  }

  getSelectedTagName() {
    for (var i = 0; i < this.state.tags.length; i++) {
      if (this.state.tags[i].id == this.state.selectedTag)
        return this.state.tags[i].name;
    }
    return "All Notes";
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
  var noteTags = state.notes.map(n => n.tag);
  return {
    selectedTag: state.selectedTag,
    tags: state.tags,
    notes: state.notes,
    selectedNote: state.selectedNote,
    noteTags
  };
};
export default connect(mapStateToProps)(NotesBar);
