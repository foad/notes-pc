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
      const tags = [...state.tags];
      let newTags = [];
      for (let i = 0; i < tags.length; i++) {
        if (tags[i].id !== payload.id) newTags.push(tags[i]);
      }
      return {
        ...state,
        tags: newTags
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
          tag.id === payload.id ? { id: tag.id, name: payload.text } : tag
      );
      return {
        ...state,
        tags
      };
    }

    case AppConstants.APP_CREATE_NEW_TAG: {
      const id = Math.max.apply(Math, state.tags.map(tag => tag.id)) + 1;
      return {
        ...state,
        tags: [...state.tags, { id, name: '' }],
        editingTag: id,
        selectedTag: id
      };
    }

    default: {
      return state;
    }
  }
};
