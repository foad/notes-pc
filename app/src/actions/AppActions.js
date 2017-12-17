import store from '../store.js'

import AppConstants from '../AppConstants'

const init = () => {

}

const getTags = () => {
    return store.getState().tags
}

const createNewTag = (name) => {
    
}

const deleteTag = (id) => {
    store.dispatch({
        type : AppConstants.APP_DELETE_TAG,
        id
    })
}

const getSelectedTag = () => {
    return store.getState().selectedTag
}

const setSelectedTag = (id) => {
    store.dispatch({
        type : AppConstants.APP_SET_SELECTED_TAG,
        id
    })
}

export default {
    init,
    getTags,
    deleteTag,
    getSelectedTag,
    setSelectedTag,
}