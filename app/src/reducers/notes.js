import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_SET_NOTE_TEXT): {
            const newState = { ...state }
            for (var i = 0; i < newState.notes.length; i++) {
                if (newState.notes[i].id == payload.id) {
                    newState.notes[i].text = payload.text
                    break
                }
            }
            return newState
        }

        case (AppConstants.APP_UPDATE_NOTE_TAG): {
            const newState = { ...state }
            for (var i = 0; i < newState.notes.length; i++) {
                if (newState.notes[i].id == payload.id) {
                    newState.notes[i].tag = payload.tag
                    break
                }
            }
            return newState
        }

        default: {
            return state
        }
    }
}