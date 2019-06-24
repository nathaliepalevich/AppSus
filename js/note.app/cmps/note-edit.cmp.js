'use strict'
import noteService from '../note.service.js'
export default {
    name: 'note-edit',
    template: `
        <div class="note-edit">
                <!-- Delete Note -->
               <button @click="deleteNote"><i class="fas fa-trash-alt"></i></button>
                <!-- Edit Note's Text -->
               <button @click="toggleEditTxt =! toggleEditTxt"><i class="fas fa-paragraph"></i></button>
               <input type="text" v-show="toggleEditTxt" v-model="note.txt" @keydown.enter="editTxt" placeholder="Write a note">
               <!-- Edit Note's Image -->
               <button @click="toggleEditImg =! toggleEditImg"><i class="fas fa-image"></i></button>
               <input type="text" v-show="toggleEditImg" v-model="note.img" @keydown.enter="editImg" placeholder="Add Image URL">
               <!-- Add Note's todo -->
               <button @click="toggleEditTodo =! toggleEditTodo"><i class="fas fa-list-alt"></i></button>
               <input type="text" v-show="toggleEditTodo" v-model="todoToAdd" @keydown.enter="addTodo" placeholder="Add Todo">

            </div>  


               <!-- <input type="color" v-show="toggleEditColor" v-model="note.background" @change="changeBackgroundColor" > -->



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
            noteService.saveNotes()
            this.toggleEditImg = false;
            // noteService.editNoteImg(this.note.id, this.note.img);
        },
        changeBackgroundColor() {
            console.log('editing color! to:', this.note.background);
            noteService.saveNotes()
            console.log('background:', this.note.background)
            // noteService.editNoteColor(this.note.id,)
        },
        addTodo() {
            console.log('Adding todo! need to push the new text', this.todoToAdd, 'to', this.note.todos)
            noteService.addTodoItem(this.note.id, this.todoToAdd);
            noteService.saveNotes();
            this.todoToAdd = ''
        },
        deleteNote: function () {
            noteService.deleteNote(this.note.id);
        }, toggleEditBox() {
            this.editBox = !this.editBox;
            // If the edit box is open, we will want to make it autofocus on the first box
            //It won't autofocus for some reason
        },
    },

}