import {EditorState} from 'draft-js'

var editorState = EditorState.createEmpty()

var testData = {
    selectedTag: -1,
    selectedNote: -1,
    tags: [
        {id: 0, name: 'todo'},
        {id: 1, name: 'learning'},
        {id: 2, name: 'snippets'},
        {id: 3, name: 'blog'},
        {id: 4, name: 'business'},
        {id: 5, name: 'food'},
        {id: 6, name: 'testing'},
    ],
    notes: [
        {id: 0, name: 'Cosagning', tag: 4, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 1, name: 'sgy Learning', tag: 0, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cellsasd fasdf that can easdf asdf sily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 2, name: 'Community hdsf', tag: 1, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 3, name: 'saegasg', tag: 2, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 4, name: 'asegrseg', tag: 3, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 5, name: 'hreh erg werhehg', tag: 5, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 6, name: 'test st', tag: 2, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
        {id: 7, name: 'not fromme', tag: 1, date: '2017-12-16T11:12:13.000', text: 'During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah During particular group of cells that can easily be blah blah blah'},
    ],
    editorState,
    selectionState: editorState.getSelection(),
};


export default {
    selectedTag: -1,
    selectedNote: -1,
    token: '',
    apiResponse: null,
    tags: [],
    notes: [],
    editorState,
    selectionState: editorState.getSelection(),
}