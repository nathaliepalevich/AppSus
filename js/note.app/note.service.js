import util from '../global/service.util.js'
import storage from '../global/storage.service.js'
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

function createTxtNote(txt, backgroundClr = 'white') {
    return {
        id: util.makeId(),
        txt: txt,
        background: backgroundClr
    }
}

function addTxtNote(txt, backgroundClr = 'white') {
    let newNote = createTxtNote(txt, backgroundClr);
    notesDB.push(newNote);
    storage.store(NOTE_KEY, notesDB);
}

function deleteNote(noteId) {
    let noteIdx = notesDB.findIndex(note => note.id === noteId);
    notesDB.splice(noteIdx, 1);
    storage.store(NOTE_KEY, notesDB);
}

function editTxt(noteId, txt){
    let note = notesDB.find(note => note.id === noteId);
    note.txt = txt;
    storage.store(NOTE_KEY, notesDB);
}

function _createTxtNotes() {
    let notes = []
    notes.push(createTxtNote('Stay positive'));
    notes.push(createTxtNote('Enjoy the process'));
    notes.push(createTxtNote('Be grateful'));
    return notes
}

export default {
    getNotes,
    createTxtNote,
    addTxtNote,
    deleteNote,
    editTxt
}