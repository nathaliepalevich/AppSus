import mailService from '../../mail.app/mail.service.js'
import mailList from '../../mail.app/mail.cmps/mail.list.cmp.js'
import mailCompose from '../../mail.app/mail.cmps/mail-compose.cmp.js'
// import serviceUtil from '../service.util.js'

export default {
    name: 'mail-app',
    template: `
    <section class="mail-app flex">
        <section class="mail-sidebar flex">
    <mail-compose></mail-compose>
    </section>
<mail-list :mails="mailsForDisplay" class="flex"></mail-list>
    </section>
    `,
    components: {
        mailList,
        mailCompose
        // filter: null
        // serviceUtil
    },
    computed: {
        mailsForDisplay() {
            if (!this.filter) return this.mails
            // return this.mails.filter(mail => mail.subject.includes(this.filter.subject)) &&
            //     this.mails.filter(mail => mail.body >= this.filter.body)

        }
    },
    data() {
        return {
            mails: null
        }
    },
    created() {
        console.log('mail app created')
        console.log(this.mails)
        //  this.mails = serviceUtil.load('savedMail')
        //  console.log(this.mails);

    },
}