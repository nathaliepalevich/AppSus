'use strict'
import mailService from '../mail.service.js'

export default {
     name: 'compose-mail',
     template: `
     <section>     
          <form class=vue-form action="text" @submit.prevent="submit">
                    <h1>New Mail</h1>
               <input placeholder="From:" type="text" >
               <input placeholder="Subject: " type="text" name="text" id="subject" required="">
               <input placeholder="Send to: " type="email" name="email" id="email" required="">
               <textarea placeholder="Mail body here" id="message"></textarea>
               <button>SEND</button>
               <input type="submit" value="Send Form">
          </form>
     </section>
     `,
    data() {
     return {
       name: '',
       email: '',
     }
   },
   methods: {
     // submit form handler
     submit() {
       this.submitted = true;
     },
     // validate by type and value
     validate: function(type, value) {
       if (type === "email") {
         this.email.valid = this.isEmail(value) ? true : false;
       }
     },
     // check for valid email adress
     isEmail: function(value) {
       return emailRegExp.test(value);
     },
     // check or uncheck all
     checkAll: function(event) {
       this.selection.features = event.target.checked ? this.features : [];
     }
   },
   watch: {
     // watching nested property
     "email.value": function(value) {
       this.validate("email", value);
     }
   }
}