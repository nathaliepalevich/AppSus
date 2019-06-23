'use strict'
import mailService from '../mail.service.js'

export default {
  name: 'compose-mail',
  template: `
     <section>     
          <form class=vue-form action="text" @submit.prevent="addMail">
                <h1>New Mail</h1>
               <input placeholder="From:" type="text" v-model="mail.from">
               <input placeholder="Subject: " type="text" v-model="mail.subject"  required="">
               <input placeholder="Send to: " type="email"  required="">
               <textarea placeholder="Mail body here" v-model="mail.body"></textarea>
               <input type="submit" value="Send Mail">
          </form>
     </section>
     `,
  data() {
    return {
      mail: {
        subject: '',
        body: '',
        from: ''
      },
    }
  },
  computed: {
  },
  methods: {
    // submit form handler
    addMail() {
      mailService.createMail(this.mail.subject, this.mail.body, this.mail.from)
      mailService.addMail('inboxMail', this.mail);
      mailService.addToSent('sentMails', this.mail)
    },
    // validate by type and value
    validate(type, value) {
      if (type === "email") {
        this.email.valid = this.isEmail(value) ? true : false;
      }
    },
    // check for valid email adress
    isEmail(value) {
      return emailRegExp.test(value);
    },
    // check or uncheck all
    checkAll(event) {
      this.selection.features = event.target.checked ? this.features : [];
    }
  },
  watch: {
    // watching nested property
    "email.value"(value) {
      this.validate("email", value);
    }
  },
  created() {
    console.log('compose')
  }
}