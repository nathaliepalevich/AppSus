import util from '../global/service.util.js';
import storage from '../global/storage.service.js';
import serviceUtil from '../global/service.util.js';
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
function createNote(type, txt = '', imgUrl = '') {
    return {
        type: type,
        id: util.makeId(),
        txt: txt,
        img: imgUrl,
        todos: [],
        background: '#FFFFFF'
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

function toggleTodo(noteId, todoIdx) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    let curTodo = notesDB[noteIdx].todos[todoIdx]
    curTodo.isDone = !curTodo.isDone
    storage.store(NOTE_KEY, notesDB);
}

function addTodoItem(noteId, todoItem) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    let randomId = serviceUtil.makeId();
    let todo = {
        id: randomId,
        txt: todoItem,
        isDone: false,
        priority: 0
    };
    notesDB[noteIdx].todos.push(todo)
}

function saveNotes() {
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

function deleteEmptyNote(noteId) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    let curNote = notesDB[noteIdx]
    if (curNote.txt === '' && curNote.img === '' && !curNote.todos.length) deleteNote(noteId)
}

//Notes Filtering
function filterNotes(filter) {
    return new Promise((resolve, reject) => {
        let filteredNotes = notesDB.slice();
        filteredNotes = notesDB.filter(note => {
            return (note.txt.toLowerCase().includes(filter.txt.toLowerCase()) ||
                note.todos.forEach(todo => {
                    todo.txt.toLowerCase().includes(filter.txt.toLowerCase())
                    console.log('checking if the todo', todo.txt, 'has the string', filter.txt, 'in it')
                })
            )
        })
        return resolve(filteredNotes)
    })
    // notesDB.filter(note=> note.txt.toLowerCase().includes(filter.txt.toLowerCase()))
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
    saveNotes,
    createNote,
    addTxtNote,
    addImgNote,
    addTodosNote,
    deleteNote,
    deleteTodo,
    editNoteTxt,
    editNoteImg,
    addTodoItem,
    toggleTodo,
    filterNotes,
    deleteEmptyNote
}