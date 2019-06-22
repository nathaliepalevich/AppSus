'use strict'
import noteService from '../note.service.js'
export default {
    name: 'note-generator',
    template: `
        <div class="note-generator">
        <input type="text" ref="inputBox" v-model="noteTxt" @keydown.enter="addNote" placeholder="Write a note">
</div>
    `,
    data() {
        return {
            noteTxt: ''
        }
    },
    methods: {
        addNote: function () {
            noteService.addTxtNote(this.noteTxt)
            this.$refs.inputBox.value = ''
        }
    },
    mounted() {
        this.$refs.inputBox.focus()
    }
}