import store from '../store.js'

const init = () => {

}

const getTags = () => {
    return store.getState().tags
}

export default {
    init,
    getTags,
}