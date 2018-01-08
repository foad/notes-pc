import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_SET_SELECTED_NOTE): {
            return {
                ...state,
                selectedNote: payload.id,
            }
        }

        case (AppConstants.APP_LOAD_NOTES): {
            return {
                ...state,
                notes: payload.notes,
            }
        }

        case (AppConstants.APP_UPDATE_NOTE_TITLE): {
            const newState = { ...state }
            for (var i = 0; i < newState.notes.length; i++) {
                if (newState.notes[i].id == payload.id) {
                    newState.notes[i].name = payload.name
                    break
                }
            }
            return newState
        }

        case (AppConstants.APP_CREATE_NEW_NOTE): {
            return {
                ...state,
                selectedNote: payload.note.id,
                notes: [ ...state.notes, payload.note ]
            }
        }

        default: {
            return state
        }
    }
}