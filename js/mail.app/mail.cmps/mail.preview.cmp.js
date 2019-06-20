export  default { 
    props: ['mail'],
    template: `
            <li>
                <h6>{{mail.subject}}</h6>
                <h6>{{mail.body}}</h6>
                <!-- <router-link :to="bookURL" >Check it out!</router-link> -->
        </li>
    `,
    created() {
        console.log('got to mail preview')
    },
   computed: {
       bookURL(){
           return '/book/' + this.book.id
       }
   },
}