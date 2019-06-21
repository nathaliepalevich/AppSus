export default {
    name: 'mail-preview',
    props: ['mail'],
    template: `
    <div class="mail-preview">
    <h6>{{mail.from}}</h6>
    <h6>{{mail.subject}}</h6>
    <h6>{{mail.body}}</h6>
    <h6>{{mail.sentAt}}</h6>
            
    </div>
    `,
    created() {
        // console.log('got to mail preview')

    },
    // data() {
    //     return {
    //         mail: null
    //     }
    // },
    computed: {
        bookURL() {
            return '/book/' + this.book.id
        }
    },
}