'use strict'
// import mailService from '../../global/service.util.js'
import mailPreview from './mail.preview.cmp.js'
import serviceUtil from '../../global/service.util.js'

export default {
    name: 'mail-list',
    template: `
    <section>
    <h1>Mail List</h1>
    <div class="mail-container">
    <mail-preview    
    v-for="(currentMail, idx) in mails"
    :key="idx"
    :mail="currentMail"></mail-preview>
    </div>
    </section>   
    `,
    component: {
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