import store from '../store.js'

import AppConstants from '../AppConstants'

const init = () => {

}
const createNewTag = (name) => {
    
}

const deleteTag = (id) => {
    store.dispatch({
        type : AppConstants.APP_DELETE_TAG,
        id
    })
}

const setSelectedTag = (id) => {
    store.dispatch({
        type : AppConstants.APP_SET_SELECTED_TAG,
        id
    })
}

const setSelectedNote = (id) => {
    store.dispatch({
        type : AppConstants.APP_SET_SELECTED_NOTE,
        id
    })
}

const setNoteText = (id, text) => {
    store.dispatch({
        type: AppConstants.APP_SET_NOTE_TEXT,
        id,
        text,
    })
}

const updateNoteTitle = (id, name) => {
    store.dispatch({
        type: AppConstants.APP_UPDATE_NOTE_TITLE,
        id,
        name
    })
}

const updateNoteTag = (id, tag) => {
    store.dispatch({
        type: AppConstants.APP_UPDATE_NOTE_TAG,
        id,
        tag
    })
}

const createNewNote = (note) => {
    store.dispatch({
        type: AppConstants.APP_CREATE_NEW_NOTE,
        note
    })
}

const updateNoteEditor = (id, text, editorState, selectionState) => {
    store.dispatch({
        type: AppConstants.APP_UPDATE_NOTE_EDITOR,
        id,
        text,
        editorState,
        selectionState,
    })
}

export default {
    init,
    deleteTag,
    setSelectedTag,
    setSelectedNote,
    setNoteText,
    updateNoteTitle,
    updateNoteTag,
    createNewNote,
    updateNoteEditor,
}