'use strict'
import noteService from '../note.service.js'
import utilService from '../../global/service.util.js'
export default {
    name: 'note-todos',
    template: `
        <div class="note-todos"> 
        <input type="text" ref="inputBox" v-model="todo" @keydown.enter="addTodoItem" placeholder="Add Todo">
        <!-- <button @click.stop="addTodoNote">Send</button> -->
        </div>
    `,
    data() {
        return {
            todo: '',
            todos: []
        }
    },
    methods: {
        addTodoItem() {
            console.log('adding a todo from note-todos')
            let randomId = utilService.makeId();
            this.todos.push({id: randomId,
                 txt: this.todo,
                 isDone: false,
                 priority: 0
                });
            console.log(this.todos);
            this.$refs.inputBox.value = ''
            this.addTodoNote()
        },
        addTodoNote() {
            console.log('adding todos note!');
            noteService.addTodosNote(this.todos);
            this.todos = [];
            this.$refs.inputBox.value = '';
        }
    },
    mounted() {
        this.$refs.inputBox.focus()
    },
    created(){
        
    }
}