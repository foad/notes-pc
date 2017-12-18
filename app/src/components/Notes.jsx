import React, {Component} from 'react'
import {connect} from 'react-redux'

import AppActions from '../actions/AppActions'

import NotesMenu from './NotesMenu.jsx'
import NoteEditor from './NoteEditor.jsx'

class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedNote: props.selectedNote,
            noteName: props.noteName,
            noteTag: props.noteTag,
            noteText: props.noteText,
            tags: props.tags,
            selection: props.selection,
        }

        this.getNoteContent = this.getNoteContent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedNote: nextProps.selectedNote,
            noteName: nextProps.noteName,
            noteTage: nextProps.noteTage,
            noteText: nextProps.noteText,
            tags: nextProps.tags,
            selection: nextProps.selection,
        })
    }

    getTagName(tagID) {
        return '#' + this.state.tags.find((tag) => tag.id == tagID).name
    }

    handleTitleChange(event) {
        AppActions.updateNoteTitle(this.state.selectedNote, event.target.value)
    }

    getNoteContent() {
        return (
            <div className='notes'>
                <input className='note__title' value={this.state.noteName} ref='titleInput' onChange={this.handleTitleChange.bind(this)} />
                <p className='note__tag'>{this.getTagName.bind(this, this.state.noteTag)}</p>
                <NotesMenu />
                <NoteEditor id={this.state.selectedNote} initialValue={this.state.noteText} selection={this.state.selection} />
            </div>
        )
    }

    render () {
        return (
            this.getNoteContent()
        )
    }
}
const mapStateToProps = state => {
    var selectedNoteVal = state.notes.find((note) => {
        return note.id == state.selectedNote
    })
    if (selectedNoteVal === undefined) selectedNoteVal = {id: -1, name: '', tag: -1, text: ''}
    return {
        selectedNote: selectedNoteVal.id,
        noteName: selectedNoteVal.name,
        noteTag: selectedNoteVal.tag,
        noteText: selectedNoteVal.text,
        tags: state.tags,
        selection: state.selection,
    }
}
export default connect(mapStateToProps)(Notes)