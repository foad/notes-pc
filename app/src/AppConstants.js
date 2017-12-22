import keymirror from 'keymirror'

var actions = keymirror({
    APP_DELETE_TAG : null,
    APP_SET_SELECTED_TAG : null,
    APP_SET_SELECTED_NOTE : null,
    APP_SET_NOTE_TEXT : null,
    APP_UPDATE_NOTE_TITLE : null,
    APP_CREATE_NEW_NOTE : null,
    APP_UPDATE_NOTE_TAG : null,
    APP_UPDATE_NOTE_EDITOR : null,
    APP_SET_TOKEN : null,
    APP_SET_API_RESPONSE : null,
    APP_LOAD_NOTES : null,
    APP_LOAD_TAGS : null,
})
var consts = {
    API_URL : 'https://danfoad.co.uk/notes/'
}
export default { ...actions, ...consts }