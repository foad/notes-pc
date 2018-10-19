import keymirror from 'keymirror';

let actions = keymirror({
  APP_CREATE_NEW_TAG: null,
  APP_DELETE_TAG: null,
  APP_SET_SELECTED_TAG: null,
  APP_SET_EDITING_TAG: null,
  APP_SET_TAG_TEXT: null,
  APP_SET_SELECTED_NOTE: null,
  APP_SET_NOTE_TEXT: null,
  APP_UPDATE_NOTE_TITLE: null,
  APP_CREATE_NEW_NOTE: null,
  APP_UPDATE_NOTE_TAG: null,
  APP_DELETE_NOTE: null,
  APP_UPDATE_NOTE_EDITOR: null,
  APP_SET_TOKEN: null,
  APP_SET_API_RESPONSE: null,
  APP_LOAD_NOTES: null,
  APP_LOAD_TAGS: null,
  APP_SEARCH_NOTES: null,
  APP_SET_SORTING: null
});
let consts = {
  API_URL: 'https://danfoad.co.uk/notes/'
};
export default { ...actions, ...consts };
