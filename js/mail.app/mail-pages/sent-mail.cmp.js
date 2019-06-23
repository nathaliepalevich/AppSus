'use strict'
import mailPreview from '../mail.cmps/mail.preview.cmp.js'


export default {
     name: 'sent-mail',
     template: `
     <section class="sent-mail">
         <mail-preview class="flex" v-for="mail in mails"
         :key="mail.id"
         :mail="mail">
         </mail-preview>
     </section>   
     `,
     props: ['mails'],
     components: {
         mailPreview,
     },
 }