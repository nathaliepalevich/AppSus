import noteService from '../note.service.js'
import noteEdit from './note-edit.cmp.js'
'use strict'
export default {
    name: 'note-preview',
    template: `
        <div class="note-preview flex" :style="{background: note.background}">
            <p class="flex full align-center" v-if="note.txt.length">{{note.txt}}</p>
           <img class="flex full align-center" v-if="note.img.length" :src=note.img title="Note Image"/>
           <ul class="flex flex-column full aligns-center" v-if="todos.length">
               <li v-for="(todo, idx) in todos" :key="todo.id" :todo="todo" @click="toggleTodo(idx)" :class="{'todo-done' : todo.isDone}">
                 <button @click.stop="deleteTodo(idx)"><i class="fas fa-times"></i></button> {{todo.txt}}
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