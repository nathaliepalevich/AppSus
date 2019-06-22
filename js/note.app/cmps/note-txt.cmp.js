'use strict'
import noteService from '../note.service.js'
export default {
    name: 'note-txt',
    template: `
        <div class="note-txt">
        <input type="text" ref="inputBox" v-model="noteTxt" @keydown.enter="addTxtNote" placeholder="Write a note">
    </div>
    `,
    data() {
        return {
            noteTxt: '',
        }
    },
    methods: {
        addTxtNote: function () {
            console.log('adding txt note!')
            noteService.addTxtNote(this.noteTxt)
            this.$refs.inputBox.value = ''
        }
    },
    mounted() {
        this.$refs.inputBox.focus()
    },
}