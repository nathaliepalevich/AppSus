'use strict'
import notePreview from './note-preview.cmp.js'
export default{
    name: 'note-list',
    template: `
        <section class="note-list">
        <note-preview v-for="note in notes"
        :key="note.id"
        :note="note" class="flex flex-column align-center justify-center">
        
    </note-preview>
        </section>
    `,
    props: ['notes']
    ,
    components: {
        notePreview
    }
}