import util from '../global/service.util.js';
import storage from '../global/storage.service.js';
const NOTE_KEY = 'savedNotes';
let notesDB = [];

function getNotes() {
    let notes = storage.load(NOTE_KEY);
    if (notes && notes.length !== 0) notesDB = notes;
    else {
        notesDB = _createTxtNotes();
        storage.store(NOTE_KEY, notesDB);
    }
    return Promise.resolve(notesDB);
}

// Create
function createNote(type, txt = '', imgUrl = '', backgroundClr = 'white') {
    return {
        type: type,
        id: util.makeId(),
        txt: txt,
        img: imgUrl,
        todos: [],
        background: backgroundClr
    }
}

function addTxtNote(txt) {
    let newNote = createNote();
    newNote.txt = txt;
    notesDB.push(newNote);
    storage.store(NOTE_KEY, notesDB);
}

function addImgNote(imgUrl) {
    let newNote = createNote();
    newNote.img = imgUrl;
    notesDB.push(newNote);
    storage.store(NOTE_KEY, notesDB);
}

function addTodosNote(todos) {
    let newNote = createNote();
    newNote.todos = todos;
    notesDB.push(newNote);
    storage.store(NOTE_KEY, notesDB);
}

// Update 
function editNoteTxt(noteId, txt) {
    let note = notesDB.find(note => note.id === noteId);
    note.txt = txt;
    storage.store(NOTE_KEY, notesDB);
}

function editNoteImg(noteId, img) {
    let note = notesDB.find(note => note.id === noteId);
    note.img = img;
    storage.store(NOTE_KEY, notesDB);
}

function toggleTodo(noteId, todoIdx){
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    let curTodo = notesDB[noteIdx].todos[todoIdx]
    curTodo.isDone = !curTodo.isDone
    storage.store(NOTE_KEY, notesDB);
}

// Delete
function deleteNote(noteId) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    notesDB.splice(noteIdx, 1);
    storage.store(NOTE_KEY, notesDB);
}

function deleteTodo(noteId, todoIdx) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    notesDB[noteIdx].todos.splice(todoIdx, 1);
    storage.store(NOTE_KEY, notesDB);
}

// Hard-Coded todos
function _createTxtNotes() {
    let notes = [];
    notes.push(createNote('txt', 'Stay positive'));
    notes.push(createNote('txt', 'Enjoy the process'));
    notes.push(createNote('txt', 'Be grateful'));
    return notes;
}

export default {
    getNotes,
    createNote,
    addTxtNote,
    addImgNote,
    addTodosNote,
    deleteNote,
    deleteTodo,
    editNoteTxt,
    editNoteImg,
    toggleTodo
}