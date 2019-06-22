import noteService from '../note.service.js'
'use strict'
export default {
    name: 'note-preview',
    template: `
        <div class="note-preview background-color">
            <p>{{note.txt}}</p>
            <button @click="deleteNote">X</button>
            <button @click="toggleEditBox">E</button>
            <input type="text" ref="editBox" v-show="editBox" v-model="note.txt" @keydown.enter="editTxt" placeholder="Write a note">

        </div>
    `,
    props: ['note'],
    data() {
        return {
            editBox: false
        }
    },
    methods: {
        deleteNote: function () {
            noteService.deleteNote(this.note.id)
        },
        toggleEditBox: function () {
            this.editBox = !this.editBox
            // If the edit box is open, we will want to make it autofocus
            //It won't autofocus for some reason
            if (this.editBox) this.$refs.editBox.focus()
        },
        editTxt: function () {
            console.log('editing')
            noteService.editTxt(this.note.id, this.note.txt)
            this.editBox = false;
        },
    },
    computed: {

    },
}