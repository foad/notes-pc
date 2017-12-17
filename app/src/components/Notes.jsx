import React, {Component} from 'react'
import {connect} from 'react-redux'

import NotesMenu from './NotesMenu.jsx'
import NoteEditor from './NoteEditor.jsx'

class Notes extends Component {

    constructor(props) {
        super(props)

        this.state = {selectedNote: props.selectedNote, notes: props.notes, tags: props.tags}

        this.getNoteContent = this.getNoteContent.bind(this)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            selectedNote: nextProps.selectedNote,
            notes: nextProps.notes,
            tags: nextProps.tags,
        })
    }

    getTagName(tagID) {
        return '#' + this.state.tags.find((tag) => tag.id == tagID).name
    }

    getNoteContent() {
        var selectedNote = this.state.notes.find((note) => {
            return note.id == this.state.selectedNote
        })

        var noteName, noteTag, noteText
        
        if (selectedNote !== undefined) {
            noteName = selectedNote.name
            noteTag = this.getTagName(selectedNote.tag)
            noteText = selectedNote.text
        } else {
            noteName = ''
            noteTag = ''
            noteText = ''
        }

        return (
            <div className='notes'>
                <h2 className='note__title'>{noteName}</h2>
                <p className='note__tag'>{noteTag}</p>
                <NotesMenu />
                <NoteEditor id={this.state.selectedNote} initialValue={noteText} />
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
    return {
        selectedNote: state.selectedNote,
        notes: state.notes,
        tags: state.tags,
    }
}
export default connect(mapStateToProps)(Notes)