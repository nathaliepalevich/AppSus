import noteTxt from './note-txt.cmp.js'
import noteImg from './note-img.cmp.js'
import noteTodos from './note-todos.cmp.js'

export default{
    name: 'note-generator',
    template: `
        <div class="note-generator">
        <note-txt></note-txt>
        <note-img></note-img>
        <note-todos></note-todos>
       </div>
    `,
    components: {
        noteTxt,
        noteImg,
        noteTodos
    }
}