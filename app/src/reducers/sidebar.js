import AppConstants from '../AppConstants';

export default (state = {}, payload) => {
  switch (payload.type) {
    case AppConstants.APP_LOAD_TAGS: {
      return {
        ...state,
        tags: payload.tags
      };
    }

    case AppConstants.APP_DELETE_TAG: {
      return {
        ...state,
        tags: state.tags.filter(tag => tag.id !== payload.id)
      };
    }

    case AppConstants.APP_SET_SELECTED_TAG: {
      return {
        ...state,
        selectedTag: payload.id
      };
    }

    case AppConstants.APP_SET_EDITING_TAG: {
      return {
        ...state,
        editingTag: payload.id
      };
    }

    case AppConstants.APP_SET_TAG_TEXT: {
      const tags = state.tags.map(
        tag =>
          tag.id === payload.id ? { id: tag.id, name: payload.name } : tag
      );
      return {
        ...state,
        tags
      };
    }

    case AppConstants.APP_CREATE_NEW_TAG: {
      const id = payload.tag.id;
      return {
        ...state,
        tags: [...state.tags, payload.tag],
        editingTag: id,
        selectedTag: id
      };
    }

    default: {
      return state;
    }
  }
};
