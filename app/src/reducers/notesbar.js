import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {
        case (AppConstants.APP_SET_SELECTED_NOTE): {
            return {
                ...state,
                selectedNote: payload.id,
            }
        }

        default: {
            return state
        }
    }
}