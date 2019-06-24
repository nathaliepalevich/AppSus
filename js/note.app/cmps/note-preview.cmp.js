import noteService from '../note.service.js'
import noteEdit from './note-edit.cmp.js'
'use strict'
export default {
    name: 'note-preview',
    template: `
        <div class="note-preview" :style="{background: note.background}">
            <p v-if="note.txt.length">{{note.txt}}</p>
           <img v-else-if="note.img.length" :src=note.img title="Note Image"/>
           <ul v-if="todos.length">
               <li v-for="(todo, idx) in todos" :key="todo.id" :todo="todo" @click="toggleTodo(idx)" :class="{'todo-done' : todo.isDone}">
                   {{todo.txt}} <button @click.stop="deleteTodo(idx)"><i class="fas fa-times"></i></button>
                </li>
           </ul>
           <note-edit :note="note"> </note-edit>
</div>
      
    `,
    props: ['note'],
    data() {
        return {
            todos: this.note.todos,
            todoToAdd: ''
        }
    },
    methods: {
        deleteTodo: function (idx) {
            console.log('deleting todo', idx);
            console.log('this note id is:', this.note.id)
            noteService.deleteTodo(this.note.id, idx)
        },
        toggleTodo(todoIdx) {
            noteService.toggleTodo(this.note.id, todoIdx)
        },

    },
    components: {
        noteService,
        noteEdit
    }
}