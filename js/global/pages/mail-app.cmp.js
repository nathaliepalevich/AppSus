import mailService from '../../mail.app/mail.service.js'
import mailList from '../../mail.app/mail.cmps/mail.list.cmp.js'
import mailMenu from '../../mail.app/mail.cmps/mail-menu.cmp.js'
import mailCompose from '../../mail.app/mail.pages/mail-compose.cmp.js'
import serviceUtil from '../service.util.js'
export default {
    name: 'mail-app',
    template: `
    <section class="mail-app flex">
    <mail-menu class="mail-sidebar flex"></mail-menu>
    <mail-list :mails="mailsForDisplay" class="flex"></mail-list>
    
    <!-- <router-view></router-view> -->
</section>
    <!-- The inner router view for Mail lists (filtered or not) and the compose option. at the moment 
        I try to make only the mail and the compose pages to work -->

    `,
    components: {
        mailMenu,
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

        },
        // onMailPage() {
        //     console.log('on mail page?', this.$route.fullPath === '/mail')
        //     return this.$route.fullPath === '/mail'
        // },
        // onComposePage() {
        //     console.log('on compose page?', this.$route.fullPath === '/mail')
        //     return this.$route.fullPath === '/mail/compose'
        // }
    },
    data() {
        return {
            mails: null
        }
    },
    created() {
        // console.log('mail app created')
        // console.log('the url ISSSSSSSS:', this.$route.params)
        // console.log(this.mails)
        // //  this.mails = serviceUtil.load('savedMail')
        // //  console.log(this.mails);

    },
}