'use strict'
// import mailService from '../../global/service.util.js'
import mailPreview from './mail.preview.cmp.js'
import serviceUtil from '../../global/service.util.js'

export default {
    name: 'mail-list',
    template: `
    <section>
    <h1>Mail List</h1>

    <mail-preview v-for="mail in mails"
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