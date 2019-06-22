import mailService from '../../mail.app/mail.service.js'
import mailList from '../../mail.app/mail.cmps/mail.list.cmp.js'
import mailMenu from '../../mail.app/mail.cmps/mail-menu.cmp.js'
import searchBox from '../global.cmps/search-box.cmp.js'
import composeMail from '../../mail.app/mail-pages/compose.cmp.js'


export default {
    name: 'mail-app',
    template: `
    <section class="mail-app flex">
        <section class="mail-sidebar flex column">
            <mail-menu></mail-menu>
        </section>
        <router-view></router-view>
        <mail-list :mails="mailsForDisplay" @show-datails="showSelectedMail" class="flex column" ></mail-list>
        <!-- WE NEED TO FIND A WAY TO OPEN MAIL DETAILS 
             AND TO NOTICE 2 THINGS: 
             1) THE URL (ROUTER-LINK) WILL CHANGE
             2) WE NEED TO RENDER THE LEFT MENU COMPUNENT SO IT WILL STAY WITH US
                FOR THAT WELL USE THE CHILDREN ROUTS -->
        <!-- <mail-details></mail-details> -->
        <compose-mail></compose-mail>
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
        searchBox,
        composeMail
    },
    computed: {
        mailsForDisplay() {
            if (!this.filter) return this.mails
            return this.mails.filter(mail => mail.from.includes(this.filter))
            //  && this.mails.filter(mail => mail.body >= this.filter)
        },
    },
    methods: {
        showSelectedMail(id) {
            this.selectedMail = this.mails.find(mail => mail.id === id)
        },
        setFilter() {
            this.filter = searchBox.emitFilter()
            console.log(this.filter);
        }
    },

    created() {
        if (!this.$route.params) {
            this.isDetails = true
        }
        mailService.getEmails()
            .then(mails => this.mails = mails)
    },
}