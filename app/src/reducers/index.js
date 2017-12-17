import sidebar from './sidebar'
import notesbar from './notesbar'
import notes from './notes'

const reducers = [
    sidebar,
    notesbar,
    notes
];

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};
