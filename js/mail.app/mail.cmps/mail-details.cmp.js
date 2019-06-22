import mailService from '../mail.service.js'

export default {
    name: 'mail-details',
    template: `
            <div v-if="mail">
               <h3>Subject: {{mail.subject}}</h3>
               <h5>Sent By: {{mail.from}}</h5>
               <h4> Main Message: {{mail.body}}</h4>
                <router-link to="/mail">Back</router-link>
        </div>
    
    `,
    data() {
        return {
            mail: null
        }
    },
    created() {
        const currMail = this.$route.params.mailId
        this.mail = mailService.getById(currMail)
    },


}