'use strict'
import noteService from '../note.service.js'
export default {
    name: 'note-img',
    template: `
        <div class="note-img"> 
        <input type="text" ref="inputBox" v-model="imgUrl" @keydown.enter="addImgNote" placeholder="Enter image URL..." >
        </div>
    `,
    data() {
        return {
            imgUrl: ''
        }
    },
    methods: {
        addImgNote() {
            noteService.addImgNote(this.imgUrl)
            this.$refs.inputBox.value = ''
        }
    },
    mounted() {
        this.$refs.inputBox.focus()
    },
}