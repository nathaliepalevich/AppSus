import mailList from '../mail.cmps/mail.list.cmp.js'
import mailService from '../mail.service.js'
import mailMenu from '../mail.cmps/mail-menu.cmp.js'

export default {
     name: 'mail-inbox',
     template: `
     <section class="mail-inbox">

          <section class="mail-sidebar flex column">
            <mail-menu></mail-menu>
          </section>
          <!-- <mail-list v-if="mails" 
          :mails="mails" 
           @show-datails="showSelectedMail" 
           class="flex column" >
          </mail-list> -->
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
          mailMenu
     },
     computed: {
          mailsForDisplay() {
               if (!this.filter) return this.mails
               return this.mails.filter(mail => mail.from.includes(this.filter))
               //  && this.mails.filter(mail => mail.body >= this.filter)
           },    
     },
     created() {
          console.log('sdfsdfsdf')
          // if (!this.$route.params) {
          //      console.log(this.$route.params);
               
          //     this.isDetails = true
          // }
          // mailService.getEmails()
          //     .then(mails => this.mails = mails)
              
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