'use strict'
import appLogo from './app-logo.cmp.js'
import mainNavbar from './main-navbar.cmp.js'
import searchBox from './search-box.cmp.js'

export default {
    name: 'app-header',
    template: `
        <section class="app-header flex align-center space-between">
            <!-- Main Logo -->
            <h1 class="main-logo">AppSUS</h1>
            <!-- The search bar will have to be relative to the app we're in -->
            <search-box :set-filter="setFilter"></search-box> 
            <!-- The app logo will also have to be relative to the current app -->
            <app-logo></app-logo> 
            <main-navbar></main-navbar>
        </section>
    `,
    components: {
        appLogo,
        mainNavbar,
        searchBox
    },
    methods: {
       
    },
    computed: {
        setFilter(event) {
            if (this.$route.path === '/mail') {
                // debbuger
                console.log(event);

                // bus.$emit('filter-name', this.name)
            }
        }
    },
    created() {
        // console.log(this.$route.path)
    },
}