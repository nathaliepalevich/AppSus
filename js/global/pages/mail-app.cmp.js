import mailService from '../../mail.app/mail.service.js'
import mailList from '../../mail.app/mail.cmps/mail.list.cmp.js'
import mailMenu from '../../mail.app/mail.cmps/mail-menu.cmp.js'
import searchBox from '../global.cmps/search-box.cmp.js'
import composeMail from '../../mail.app/mail-pages/compose.cmp.js'
import mailInbox from '../../mail.app/mail-pages/inbox.cmp.js'
import mailDetails from '../../mail.app/mail.cmps/mail-details.cmp.js'

export default {
    name: 'mail-app',
    template: `
    <section class="mail-app flex">
        <section class="mail-sidebar flex column">
            <mail-menu></mail-menu>
        </section>
        <router-view></router-view>
        <mail-list v-if="any"  :mails="mailsForDisplay" @show-datails="showSelectedMail"  class="flex column" ></mail-list>
        <!-- WE NEED TO FIND A WAY TO OPEN MAIL DETAILS 
             AND TO NOTICE 2 THINGS: 
             1) THE URL (ROUTER-LINK) WILL CHANGE
             2) WE NEED TO RENDER THE LEFT MENU COMPUNENT SO IT WILL STAY WITH US
                FOR THAT WELL USE THE CHILDREN ROUTS -->
                <search-box></search-box>    
        <mail-details v-if="isDetails"></mail-details>
        <compose-mail v-if="isCompose"></compose-mail>
    </section>
    `,
    data() {
        return {
            mails: null,
            selectedMail: null,
            filter: null,
            isDetails: false,
        }
    },
    components: {
        mailList,
        mailMenu,
        mailInbox,
        composeMail,
        searchBox,
        mailDetails
    },
    computed: {
        mailsForDisplay() {
            if (!this.filter) return this.mails
     
            
            return this.mails.filter(mail => mail.from.includes(this.filter))
            //  && this.mails.filter(mail => mail.body >= this.filter)
        },
        isInbox(){
            return this.$route.path === '/mail/inbox'
        },
        isCompose(){
            return this.$route.path === '/mail/compose'
        },
        any(){
            return !this.isDetails || this.isInbox
        }
    },
    filterMails(){

    },
    methods: {
        showSelectedMail(id) {
            this.selectedMail = this.mails.find(mail => mail.id === id)
        },
        setFilter() {
            this.filter = searchBox.emitFilter()
            console.log(this.filter);
        },

    },

    created() {
        // this.$router.push('/mail/inbox')

        mailService.getEmails()
            .then(mails => this.mails = mails)
    },
}