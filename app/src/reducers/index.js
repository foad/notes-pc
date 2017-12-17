import sidebar from './sidebar'
import notesbar from './notesbar'

const reducers = [
    sidebar,
    notesbar,
];

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};
