'use strict'
import appHeader from './global.cmps/app-header.cmp.js'
import theRoutes from './routes.js'
const mainRouter = new VueRouter({ routes: theRoutes })
Vue.use(VueRouter)

var app = new Vue({
    name: 'main',
    el: '#app',
    template: `
    <div>
        <app-header></app-header>
        <router-view></router-view>
        <footer>All Rights Reserved => Nathalie & Michael 2019</footer>
    </div>
    `,
    components: {
        appHeader,
    },
    created() {
        console.log('App has been Created!')
        
    },
    router: mainRouter
    
})