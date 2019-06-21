export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <div class="mail-preview">
        <h6>{{mail.from}}</h6>
        <h6>{{mail.subject}}</h6>
        <h6>{{mail.body}}</h6>
        <h6>{{mail.sentAt}}</h6>
       <router-link :to="mailURL">Read mail</router-link>    
    </div>
    `,
    created() {
    },
    // data() {
    //     return {
    //         mail: null
    //     }
    // },
    computed: {
        mailURL() {
            return '/mail/' + this.mail.id
        }
    },
}