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

const updateSelection = (selection) => {
    store.dispatch({
        type: AppConstants.APP_UPDATE_SELECTION,
        selection
    })
}

export default {
    init,
    deleteTag,
    setSelectedTag,
    setSelectedNote,
    setNoteText,
    updateNoteTitle,
    updateSelection,
}