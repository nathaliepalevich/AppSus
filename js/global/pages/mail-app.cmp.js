import mailService from '../../mail.app/mail.service.js'
import mailList from '../../mail.app/mail.cmps/mail.list.cmp.js'
import mailMenu from '../../mail.app/mail.cmps/mail-menu.cmp.js'
import mailCompose from '../../mail.app/mail.cmps/mail-compose.cmp.js'
import mailDetails from '../../mail.app/mail.cmps/mail-details.cmp.js'
// import serviceUtil from '../service.util.js'

export default {
    name: 'mail-app',
    template: `
    <section class="mail-app flex">
        <section class="mail-sidebar flex">
    <mail-compose></mail-compose>
    </section>
    <mail-list v-if="!isDetails" :mails="mailsForDisplay" @show-datails="showSelectedMail" class="flex" ></mail-list>
    <mail-details v-else="isDetails" :mail="selectedMail" ></mail-details>
    </section>
    `,
    components: {
        mailList,
        mailCompose,
        mailDetails,
        mailMenu,

        // filter: null
        // serviceUtil
    },
    computed: {
        mailsForDisplay() {
            if (!this.filter) return this.mails
            // return this.mails.filter(mail => mail.subject.includes(this.filter.subject)) &&
            //     this.mails.filter(mail => mail.body >= this.filter.body)
            
        },

    },
    methods: {
        showSelectedMail(id){
            this.selectedMail = this.mails.find(mail => mail.id === id)
            // this.isDetails = !this.isDetails
        },
        // backToList(){
        //     // this.isDetails = !this.isDetails
        //     console.log(this.isDetails);   
        // }
 
    },
    data() {
        return {
            mails: null,
            selectedMail: null,
            filter: null,
            isDetails: false
        }
    },
    created() {
        console.log('mail app created')
        //  this.mails = serviceUtil.load('mails')
         console.log(this.mails);

    },
}