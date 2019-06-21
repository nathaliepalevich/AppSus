'use strict'
// import mailService from '../../global/service.util.js'
import mailPreview from './mail.preview.cmp.js'
import serviceUtil from '../../global/service.util.js'

export default {
    name: 'mail-list',
    template: `
    <section class="mail-list">
    <h1>Mail List</h1>
<<<<<<< HEAD
    <mail-preview v-for="mail in mails"
=======

    <mail-preview @click="" class="flex" v-for="mail in mails"
>>>>>>> 7ea67928e458d4eab296190e40639452f751cf08
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
        console.log('mail list created')
        this.mails = serviceUtil.load('savedMail')
        console.log(this.mails);
    },
}