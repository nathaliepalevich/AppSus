import noteService from '../note.service.js'
import serviceUtil from '../../global/service.util.js';
'use strict'
export default {
    name: 'note-preview',
    template: `
        <div class="note-preview background-color">
            <p v-if="note.txt.length">{{note.txt}}</p>
            <img v-if="note.img.length" :src=note.img title="Note Image"/>
            <!-- <ul v-if="todos.length"> -->
            <!-- <li v-for="todo in todos" :key="todo.id" :todo="todo">heytest</li> -->
           <!-- </ul> -->
           <ul v-if="todos.length">
               <li v-for="(todo, idx) in todos" :key="todo.id" :todo="todo" @click="toggleTodo(idx)" :class="{'todo-done' : todo.isDone}">
                   {{todo.txt}} <button @click.stop="deleteTodo(idx)">X</button>
                </li>
           </ul>
            <button @click="deleteNote">X</button>
            <button @click="toggleEditBox">E</button>
            <input type="text" ref="editBox" v-show="editBox" v-model="note.txt" @keydown.enter="editTxt" placeholder="Write a note">
            <input type="text" ref="editBox" v-show="editBox" v-model="note.img" @keydown.enter="editTxt" placeholder="Add Image URL">
        </div>
    `,
    props: ['note'],
    data() {
        return {
            editBox: false,
            todos: this.note.todos
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

        toggleEditBox: function () {
            this.editBox = !this.editBox;
            // If the edit box is open, we will want to make it autofocus on the first box
            //It won't autofocus for some reason
        },
        toggleTodo(todoIdx) {
            noteService.toggleTodo(this.note.id, todoIdx)
        },

        editTxt: function () {
            console.log('editing txt');
            noteService.editNoteTxt(this.note.id, this.note.txt);
            this.editBox = false;
        },
        editImg: function () {
            console.log('editing img');
            noteService.editNoteImg(this.note.id, this.note.img);
        }
    },
    created() {
        let todos = this.note.todos;
    },

}