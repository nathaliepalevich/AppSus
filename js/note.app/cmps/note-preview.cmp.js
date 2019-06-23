import noteService from '../note.service.js'
import serviceUtil from '../../global/service.util.js';
'use strict'
export default {
    name: 'note-preview',
    template: `
        <div class="note-preview" :style="{background: note.background}">
            <p v-if="note.txt.length">{{note.txt}}</p>
            <img v-if="note.img.length" :src=note.img title="Note Image"/>
            <!-- <ul v-if="todos.length"> -->
            <!-- <li v-for="todo in todos" :key="todo.id" :todo="todo">heytest</li> -->
           <!-- </ul> -->
           <ul v-if="todos.length">
               <li v-for="(todo, idx) in todos" :key="todo.id" :todo="todo" @click="toggleTodo(idx)" :class="{'todo-done' : todo.isDone}">
                   {{todo.txt}} <button @click.stop="deleteTodo(idx)"><i class="fas fa-times"></i></button>
                </li>
           </ul>
            <button @click="deleteNote"><i class="fas fa-trash-alt"></i></button>
            <button @click="toggleEditBox"><i class="fas fa-edit"></i></button>

            <!-- <button v-show="editBox"><i class="fas fa-paragraph"></i></button>
           <button v-show="editBox"><i class="fas fa-image"></i></button>
            <button v-show="editBox"><i class="fas fa-list-alt"></i></button> -->
            <input type="color" ref="editbox" v-show="editBox" v-model="note.background" @change="changeBackgroundColor" >
            <input type="text" ref="editBox" v-show="editBox" v-model="note.txt" @keydown.enter="editTxt" placeholder="Write a note">
            <input type="text" ref="editBox" v-show="editBox" v-model="note.img" @keydown.enter="editImg" placeholder="Add Image URL">
            <input type="text" ref="editBox" v-show="editBox" v-model="todoToAdd" @keydown.enter="addTodo" placeholder="Add Todo">
        </div>
    `,
    props: ['note'],
    data() {
        return {
            editBox: false,
            todos: this.note.todos,
            todoToAdd: ''
        }
    },
    methods: {
        deleteNote: function () {
            noteService.deleteNote(this.note.id);
        },
        deleteTodo: function (idx) {
            console.log('deleting todo', idx);
            console.log('this note id is:', this.note.id)
            noteService.deleteTodo(this.note.id, idx)
        },

        toggleEditBox() {
            this.editBox = !this.editBox;
            // If the edit box is open, we will want to make it autofocus on the first box
            //It won't autofocus for some reason
        },
        toggleTodo(todoIdx) {
            noteService.toggleTodo(this.note.id, todoIdx)
        },

        editTxt() {
            console.log('editing txt');
            noteService.editNoteTxt(this.note.id, this.note.txt);
            this.editBox = false;
        },
        editImg() {
            console.log('editing img');
            noteService.editNoteImg(this.note.id, this.note.img);
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
        }
    },
    updated() {
        noteService.deleteEmptyNote(this.note.id)
    }
}