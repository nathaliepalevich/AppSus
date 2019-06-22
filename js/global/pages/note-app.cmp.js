'use strict'
import noteService from '../../note.app/note.service.js'
import noteGenerator from '../../note.app/cmps/note-generator.cmp.js'
import noteList from '../../note.app/cmps/note-list.cmp.js'
export default {
    name: 'miss-keep',
    template: `
        <main class="misskeep-app"> 
        <note-generator></note-generator>
        <note-list :notes="notes"></note-list>
        </main>
    `,
    data() {
        return {
            notes: null
        }
    },
    created() {
        noteService.getNotes()
        .then(notes => this.notes = notes)
    },
    components: {
        noteGenerator,
        noteList
    }
}