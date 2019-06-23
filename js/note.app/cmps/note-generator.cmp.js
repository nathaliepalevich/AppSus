import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default {
    name: 'note-generator',
    template: `
        <form class="note-generator">
            
            <component :is="component"></component>
            <button @click="component= 'note-txt' " title="Add Text"><i class="fas fa-paragraph"></i></button>    
            <button @click="component= 'note-img' " title="Add Image"><i class="fas fa-image"></i></button>
            <button @click="component= 'note-todos' " title="Add todo"><i class="fas fa-list-alt"></i></button>
</form>
    `,
    data() {
        return {
            component: 'note-txt'
        }
    },
    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
}