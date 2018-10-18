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

const setSelectedNote = id => {
  store.dispatch({
    type: AppConstants.APP_SET_SELECTED_NOTE,
    id
  });
};

const setNoteText = (id, text) => {
  let state = { ...store.getState() };
  let token = state.token;

  let note;
  for (let i = 0; i < state.notes.length; i++) {
    if (state.notes[i].id == id) {
      note = state.notes[i];
      note.text = text;
      break;
    }
  }

  axios
    .post(AppConstants.API_URL, {
      method: 'update_note',
      token: token,
      note: note
    })
    .then(res => {
      //console.log(res)
    })
    .catch(err => {
      console.error(err);
    });

  store.dispatch({
    type: AppConstants.APP_SET_NOTE_TEXT,
    id,
    text
  });
};

const updateNoteTitle = (id, name) => {
  let state = { ...store.getState() };
  let token = state.token;

  let note;
  for (let i = 0; i < state.notes.length; i++) {
    if (state.notes[i].id == id) {
      note = state.notes[i];
      note.name = name;
      break;
    }
  }

  axios
    .post(AppConstants.API_URL, {
      method: 'update_note',
      token: token,
      note: note
    })
    .then(res => {
      //console.log(res)
    })
    .catch(err => {
      console.error(err);
    });
  store.dispatch({
    type: AppConstants.APP_UPDATE_NOTE_TITLE,
    id,
    name
  });
};

const updateNoteTag = (id, tag) => {
  let state = { ...store.getState() };
  let token = state.token;

  let note;
  for (let i = 0; i < state.notes.length; i++) {
    if (state.notes[i].id == id) {
      note = state.notes[i];
      note.tag = tag;
      break;
    }
  }

  axios
    .post(AppConstants.API_URL, {
      method: 'update_note',
      token: token,
      note: note
    })
    .then(res => {
      //console.log(res)
    })
    .catch(err => {
      console.error(err);
    });
  store.dispatch({
    type: AppConstants.APP_UPDATE_NOTE_TAG,
    id,
    tag
  });
};

const createNewNote = note => {
  let token = store.getState().token;

  axios
    .post(AppConstants.API_URL, {
      method: 'create_note',
      token: token,
      note: note
    })
    .then(res => {
      note.id = Number(res.data.id);
      store.dispatch({
        type: AppConstants.APP_CREATE_NEW_NOTE,
        note
      });
    })
    .catch(err => {
      console.error(err);
    });
};

const updateNoteEditor = (id, text, editorState, selectionState) => {
  store.dispatch({
    type: AppConstants.APP_UPDATE_NOTE_EDITOR,
    id,
    text,
    editorState,
    selectionState
  });
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
  deleteTag,
  setSelectedTag,
  setSelectedNote,
  setNoteText,
  updateNoteTitle,
  updateNoteTag,
  createNewNote,
  updateNoteEditor,
  attemptLogin,
  saveCredentials
};
