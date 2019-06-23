import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default{
    name: 'note-generator',
    template: `
        <div class="note-generator">
            <component :is="component"></component>
            <button @click="component= 'note-txt' ">Txt</button>    
            <button @click="component= 'note-img' ">img</button>
            <button @click="component= 'note-todos' ">Todo</button>

        <!-- <note-txt></note-txt>
        <note-img></note-img>
        <note-todos></note-todos> -->
       </div>
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