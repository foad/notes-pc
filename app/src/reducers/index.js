import sidebar from './sidebar'

const reducers = [
    sidebar,
];

export default (state, action) => {
    return reducers.reduce((currentState, reducer) => {
        return reducer(currentState, action);
    }, state);
};
