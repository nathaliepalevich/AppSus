'use strict'
import noteService from '../../note.app/note.service.js'
import eventBus, { FILTER_NOTES } from '../event-bus.js'
import noteGenerator from '../../note.app/cmps/note-generator.cmp.js'
import noteList from '../../note.app/cmps/note-list.cmp.js'
export default {
    name: 'miss-keep',
    template: `
        <main class="misskeep-app"> 
        <!-- <h1>{{filteredNotes}}</h1> -->
        <note-generator></note-generator>
        <note-list :notes="filteredNotes"></note-list>
        </main>
    `,
    data() {
        return {
            notes: [],
            filter: null, //Added
            filteredNotes: [] //Added
        }
    },
    computed: {
        notesToShow() {
            return this.filteredNotes;
        }
    },
    methods: {
        setFilter(filterBy) {
            this.filter = filterBy;
            noteService.filterNotes(this.filter)
                .then(curNotes => {
                    this.filteredNotes = curNotes;
                })
            console.log('the filtered notes are:', this.filteredNotes)
        }
    },
    created() {
        noteService.getNotes()
            .then(notes => {
                this.notes = notes; //Added
                console.log('the notes are now:', this.notes)
                eventBus.$on(FILTER_NOTES, (ev) =>
                this.setFilter(ev)
                );
                if(!this.filteredNotes.length) this.filteredNotes =  this.notes
            })
    },
    mounted() {
        if (!this.filteredNotes.length) console.log('notes are:', this.notes)
    },
    components: {
        noteGenerator,
        noteList
    }
}