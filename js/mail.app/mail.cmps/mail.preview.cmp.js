export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <router-link :to="mailURL" class="mail-preview">
        <h6>{{mail.from}}</h6>
        <h4>{{mail.subject}}</h4>
        <h5>{{mail.body}}</h5>
        <h6>{{mail.sentAt}}</h6>
    </router-link>    
    `,
    computed: {
        mailURL() {
            return '/mail/' + this.mail.id
        },
        readClass(){
            return {
                read: this.isRead
            }
        }
    },
} 