import mailList from '../mail.cmps/mail.list.cmp.js'
import mailService from '../mail.service.js'
export default {
     name: 'mail-list',
     template: `
<section class="mail-list">
<mail-list :mails="mailsForDisplay" @show-datails="showSelectedMail" class="flex column" ></mail-list>
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
          mailList
     },
     computed: {
          mailsForDisplay() {
               if (!this.filter) return this.mails
               return this.mails.filter(mail => mail.from.includes(this.filter))
               //  && this.mails.filter(mail => mail.body >= this.filter)
           },    
     },
     created() {
          if (!this.$route.params) {
              this.isDetails = true
          }
          mailService.getEmails()
              .then(mails => this.mails = mails)
      },
      methods: {
          setFilter() {
               this.filter = searchBox.emitFilter()
               console.log(this.filter);
           },
           showSelectedMail(id) {
               this.selectedMail = this.mails.find(mail => mail.id === id)
           },
      },
}