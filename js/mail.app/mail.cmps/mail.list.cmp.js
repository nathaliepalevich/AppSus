'use strict'
// import mailService from '../../global/service.util.js'
import mailPreview from './mail.preview.cmp.js'
import serviceUtil from '../../global/service.util.js'

export default {
    name: 'mail-list',
    template: `
    <section class="mail-list">
    <h1>Mail List</h1>

    <mail-preview @click.native="selectedMail(mail.id)" class="flex" v-for="mail in mails"
    :key="mail.id"
    :mail="mail"></mail-preview>
    </section>   
    `,
    components: {
        mailPreview
    },
    data() {
        return {
            mails: null
        }
    },
    created() {
        this.mails = serviceUtil.load('savedMail')
        console.log(this.mails);
    },
    methods: {
        selectedMail(mailId){
            console.log(mailId);
            
            this.$emit('show-details', mailId)
        }
    },
}