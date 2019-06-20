'use strict'
import appHeader from './global.cmps/app-header.cmp.js'

import theRoutes from './routes.js'
const myRouter = new VueRouter({ routes: theRoutes })

var app = new Vue({
    name: 'main',
    el: '#app',
    template: `
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <footer>copyrights nathalie&michael 2019</footer>
    </div>
    `,
    components: {
        appHeader,
    },
    methods: {
        foo() {
            console.log('Got Here')
        }
    },
    created() {
        console.log('App has been Created!')
    },
    router: myRouter
    
})