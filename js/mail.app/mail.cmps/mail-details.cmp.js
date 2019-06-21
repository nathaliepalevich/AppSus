// import utilService from '../../global/service.util.js'
import mailService from '../mail.service.js'
export default {
    name: 'mail-details',
    template: `
            <div v-if="mail">
                <h3>{{mail.subject}}</h3>
                <h4>{{mail.body}}</h4>
                <h5>{{mail.from}}</h5>
                <router-link to="/mail">Back</router-link>
        </div>
    
    `,
    created() {
        const currMail = this.$route.params.mailId
       this.mail = mailService.getById(currMail)       
    },
    data() {
        return {
            mail: null
        }
    },
    methods: {

    },
}