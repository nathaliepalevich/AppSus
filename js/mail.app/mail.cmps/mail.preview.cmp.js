export  default { 
    name: 'mail-preview',
    props: ['mail'],
    template: `

            <div class="mail-preview">
                <h6>{{mail}}</h6>
                <!-- <h6>{{mail.body}}</h6> -->
                <!-- <router-link :to="bookURL" >Check it out!</router-link> -->
</div>
    `,
    created() {
        console.log('got to mail preview')
        
    },
    // data() {
    //     return {
    //         mail: null
    //     }
    // },
   computed: {
       bookURL(){
           return '/book/' + this.book.id
       }
   },
}