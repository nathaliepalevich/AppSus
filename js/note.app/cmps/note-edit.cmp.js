'use strict'
import noteService from '../note.service.js'
export default {
    name: 'note-edit',
    template: `
        <div class="note-edit">
            <div class="editorButtons">
                <button @click="closeAllEditors(); (toggleEditTxt =! toggleEditTxt)"><i class="fas fa-paragraph"></i></button>
                <button @click="closeAllEditors(); (toggleEditImg =! toggleEditImg)"><i class="fas fa-image"></i></button>
                <button @click="closeAllEditors(); (toggleEditTodo =! toggleEditTodo)"><i class="fas fa-list-alt"></i></button>
                <button @click="closeAllEditors(); (toggleEditColor = !toggleEditColor)"><i class="fas fa-fill-drip"></i> </button>
                <button @click="deleteNote"><i class="fas fa-trash-alt"></i></button>
            </div>
<div class="editorInputs">
                <input type="text" v-show="toggleEditTxt" v-model="note.txt" @keydown.enter="editTxt" placeholder="Write a note">
               <input type="text" v-show="toggleEditImg" v-model="note.img" @keydown.enter="editImg" placeholder="Add Image URL">
               <input type="text" v-show="toggleEditTodo" v-model="todoToAdd" @keydown.enter="addTodo" placeholder="Add Todo">
               <input type="color" class="colorInput" v-show="toggleEditColor" v-model="note.background" @change="changeBackgroundColor" >
</div>
            </div>  





            <!-- <button v-show="editBox"><i class="fas fa-paragraph"></i></button>
           <input type="text" ref="editBox" v-show="editBox" v-model="todoToAdd" @keydown.enter="addTodo" placeholder="Add Todo"> -->
    `,
    props: ['note'],
    data() {
        return {
            toggleEditTxt: false,
            toggleEditColor: false,
            toggleEditImg: false,
            toggleEditTodo: false,
            toggleEditColor: false,
            todoToAdd: ''
        }
    },
    methods: {
        editTxt() {
            noteService.saveNotes()
            this.toggleEditTxt = false;
            // noteService.editNoteTxt(this.note.id, this.note.txt);
        },
        editImg() {
            console.log(this.note.img)
            noteService.saveNotes()
            this.toggleEditImg = false;
            // noteService.editNoteImg(this.note.id, this.note.img);
        },
        changeBackgroundColor() {
            console.log('editing color! to:', this.note.background);
            noteService.saveNotes()
            console.log('background:', this.note.background)
            this.toggleEditColor = false;

            // noteService.editNoteColor(this.note.id,)
        },
        addTodo() {
            console.log('Adding todo! need to push the new text', this.todoToAdd, 'to', this.note.todos)
            noteService.addTodoItem(this.note.id, this.todoToAdd);
            noteService.saveNotes();
            this.todoToAdd = ''
            this.toggleEditTodo = false;
        },
        deleteNote: function () {
            noteService.deleteNote(this.note.id);
        }, toggleEditBox() {
            this.editBox = !this.editBox;
            // If the edit box is open, we will want to make it autofocus on the first box
            //It won't autofocus for some reason
        },
        closeAllEditors() {
            console.log('closing!')
            this.toggleEditTxt = false
            this.toggleEditColor = false
            this.toggleEditImg = false
            this.toggleEditTodo = false
            this.toggleEditColor = false
        }
    },

}