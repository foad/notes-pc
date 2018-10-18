import axios from 'axios';

import store from '../store';
import AppConstants from '../AppConstants';
import db from '../db';

export function init() {
  return dispatch => {
    db.table('tags')
      .toArray()
      .then(tags => {
        dispatch({
          type: AppConstants.APP_LOAD_TAGS,
          tags
        });
      });
    db.table('notes')
      .toArray()
      .then(notes => {
        dispatch({
          type: AppConstants.APP_LOAD_NOTES,
          notes
        });
      });
  };
}

export const setSelectedTag = id => {
  return {
    type: AppConstants.APP_SET_SELECTED_TAG,
    id
  };
};

export const setEditingTag = id => {
  return {
    type: AppConstants.APP_SET_EDITING_TAG,
    id
  };
};

export function setTagText(id, name) {
  return dispatch => {
    db.table('tags')
      .update(id, { name })
      .then(() => {
        dispatch({
          type: AppConstants.APP_SET_TAG_TEXT,
          id,
          name
        });
      });
  };
}

export function deleteTag(id) {
  return dispatch => {
    db.table('tags')
      .delete(id)
      .then(() => {
        dispatch({
          type: AppConstants.APP_DELETE_TAG,
          id
        });
      });
  };
}

export function createTag() {
  return dispatch => {
    const newTag = { name: '' };
    db.table('tags')
      .add(newTag)
      .then(id => {
        dispatch({
          type: AppConstants.APP_CREATE_NEW_TAG,
          tag: Object.assign({}, newTag, { id })
        });
      });
  };
}

export function createNote(note) {
  return dispatch => {
    db.table('notes')
      .add(note)
      .then(id => {
        dispatch({
          type: AppConstants.APP_CREATE_NEW_NOTE,
          note: Object.assign({}, note, { id })
        });
      });
  };
}

export function setSelectedNote(id) {
  return dispatch => {
    dispatch({
      type: AppConstants.APP_SET_SELECTED_NOTE,
      id
    });
  };
}

export function setNoteText(id, text) {
  return dispatch => {
    db.table('notes')
      .update(id, { text })
      .then(() => {
        dispatch({
          type: AppConstants.APP_SET_NOTE_TEXT,
          id,
          text
        });
      });
  };
}

export function setNoteTitle(id, name) {
  return dispatch => {
    db.table('notes')
      .update(id, { name })
      .then(() => {
        dispatch({
          type: AppConstants.APP_UPDATE_NOTE_TITLE,
          id,
          name
        });
      });
  };
}

export function setNoteTag(id, tag) {
  return dispatch => {
    db.table('notes')
      .update(id, { tag })
      .then(() => {
        dispatch({
          type: AppConstants.APP_UPDATE_NOTE_TAG,
          id,
          tag
        });
      });
  };
}

export const updateNoteEditor = (id, text, editorState, selectionState) => {
  return {
    type: AppConstants.APP_UPDATE_NOTE_EDITOR,
    id,
    text,
    editorState,
    selectionState
  };
};

export const searchNotes = query => {
  return {
    type: AppConstants.APP_SEARCH_NOTES,
    query
  };
};

const attemptLogin = (username, password) => {
  axios
    .post(AppConstants.API_URL, {
      method: 'start_session',
      username: username,
      password: password
    })
    .then(res => {
      if (res.data !== null && res.data !== '') {
        store.dispatch({
          type: AppConstants.APP_SET_TOKEN,
          token: res.data
        });
      }
    })
    .catch(err => {
      let res = err.response.data;
      store.dispatch({
        type: AppConstants.APP_SET_API_RESPONSE,
        apiResponse: res
      });
    });
};

const saveCredentials = (username, password) => {};

export default {
  updateNoteEditor,
  attemptLogin,
  saveCredentials
};
