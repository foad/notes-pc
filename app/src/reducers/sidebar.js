import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {

        case (AppConstants.APP_LOAD_TAGS): {
            return {
                ...state,
                tags: payload.tags,
            }
        }

        case (AppConstants.APP_DELETE_TAG): {
            const tags = [ ...state.tags ]
            var newTags = [];
            for (var i = 0; i < tags.length; i++) {
                if (tags[i].id !== payload.id) newTags.push(tags[i])
            }
            return {
                ...state,
                tags: newTags
            }
        }

        case (AppConstants.APP_SET_SELECTED_TAG): {
            return {
                ...state,
                selectedTag: payload.id,
            }
        }

        default: {
            return state
        }
    }
}