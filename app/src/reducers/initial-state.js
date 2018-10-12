import { EditorState } from "draft-js";

var editorState = EditorState.createEmpty();

var testData = {
  selectedTag: -1,
  selectedNote: -1,
  tags: [
    { id: 0, name: "todo" },
    { id: 1, name: "learning" },
    { id: 2, name: "snippets" },
    { id: 3, name: "blog" },
    { id: 4, name: "business" },
    { id: 5, name: "food" },
    { id: 6, name: "testing" }
  ],
  notes: [],
  editorState,
  selectionState: editorState.getSelection()
};

export default {
  selectedTag: -1,
  selectedNote: -1,
  token: "",
  apiResponse: null,
  tags: [],
  notes: [],
  editorState,
  selectionState: editorState.getSelection()
};
