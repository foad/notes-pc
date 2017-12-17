import AppConstants from '../AppConstants'

export default (state = {}, payload) => {
    switch (payload.type) {
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

        default: {
            return state
        }
    }
}