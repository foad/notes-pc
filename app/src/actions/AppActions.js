import axios from 'axios'

import store from '../store.js'

import AppConstants from '../AppConstants'

const init = () => {
    var token = store.getState().token

    axios.post(AppConstants.API_URL, {
        method: 'get_tags',
        token: token,
    })
    .then((res) => {
        if (res.data !== null && res.data !== '') {
            var tags = [ ...res.data ]
            
            for (var i = 0; i < tags.length; i++) {
                tags[i].id = Number(tags[i].id)
            }
            store.dispatch({
                type: AppConstants.APP_LOAD_TAGS,
                tags: tags,
            })
        }
    })
    .catch((err) => {
        console.error(err)
    })

    axios.post(AppConstants.API_URL, {
        method: 'get_notes',
        token: token,
    })
    .then((res) => {
        if (res.data !== null && res.data !== '') {
            var notes = [ ...res.data ]
            console.log(notes)

            for (var i = 0; i < notes.length; i++) {
                notes[i].id = Number(notes[i].id)
            }

            store.dispatch({
                type: AppConstants.APP_LOAD_NOTES,
                notes: notes,
            })
        }
    })
    .catch((err) => {
        console.error(err)
    })
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
    var state = { ...store.getState() }
    var token = state.token

    var note
    for (var i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id == id) {
            note = state.notes[i]
            note.text = text
            break
        }
    }

    axios.post(AppConstants.API_URL, {
        method: 'update_note',
        token: token,
        note: note,
    })
    .then((res) => {
        //console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })

    store.dispatch({
        type: AppConstants.APP_SET_NOTE_TEXT,
        id,
        text,
    })
}

const updateNoteTitle = (id, name) => {
    var state = { ...store.getState() }
    var token = state.token

    var note
    for (var i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id == id) {
            note = state.notes[i]
            note.name = name
            break
        }
    }
    
    axios.post(AppConstants.API_URL, {
        method: 'update_note',
        token: token,
        note: note,
    })
    .then((res) => {
        //console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })
    store.dispatch({
        type: AppConstants.APP_UPDATE_NOTE_TITLE,
        id,
        name
    })
}

const updateNoteTag = (id, tag) => {
    var state = { ...store.getState() }
    var token = state.token

    var note
    for (var i = 0; i < state.notes.length; i++) {
        if (state.notes[i].id == id) {
            note = state.notes[i]
            note.tag = tag
            break
        }
    }
    
    axios.post(AppConstants.API_URL, {
        method: 'update_note',
        token: token,
        note: note,
    })
    .then((res) => {
        //console.log(res)
    })
    .catch((err) => {
        console.error(err)
    })
    store.dispatch({
        type: AppConstants.APP_UPDATE_NOTE_TAG,
        id,
        tag
    })
}

const createNewNote = (note) => {
    var token = store.getState().token
    
    axios.post(AppConstants.API_URL, {
        method: 'create_note',
        token: token,
        note: note,
    })
    .then((res) => {
        note.id = Number(res.data.id)
        store.dispatch({
            type: AppConstants.APP_CREATE_NEW_NOTE,
            note
        })
    })
    .catch((err) => {
        console.error(err)
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

const attemptLogin = (username, password) => {
    axios.post(AppConstants.API_URL, {
        method: 'start_session',
        username: username,
        password: password
    })
    .then((res) => {
        if (res.data !== null && res.data !== '') {
            store.dispatch({
                type: AppConstants.APP_SET_TOKEN,
                token: res.data,
            })
        }
    })
    .catch((err) => {
        var res = err.response.data
        store.dispatch({
            type: AppConstants.APP_SET_API_RESPONSE,
            apiResponse: res,
        })
    })
}

const saveCredentials = (username, password) => {

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
    attemptLogin,
    saveCredentials,
}