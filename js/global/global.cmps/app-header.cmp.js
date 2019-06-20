'use strict'
import appLogo from './app-logo.cmp.js'
import mainNavbar from './main-navbar.cmp.js'
import searchBox from './search-box.cmp.js'

export default {
    name: 'app-header',
    template: `
        <section class="app-header">
            <!-- Main Logo -->
            <h1>AppSUS</h1>
            <!-- The search bar will have to be relative to the app we're in -->
            <search-box></search-box> 
            <!-- The app logo will also have to be relative to the current app
            <app-logo></app-logo> -->
            <main-navbar></main-navbar>
        </section>
    `,
    components: {
        appLogo,
        mainNavbar,
        searchBox
    }
}