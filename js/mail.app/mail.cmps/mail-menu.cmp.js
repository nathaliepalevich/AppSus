'use strict'
export default {
    name: 'mail-menu',
    template: `
    <ul class="mail-menu flex column">
    <router-link to="/mail/compose">Compose</router-link>      
    <router-link to="/mail/inbox">Inbox</router-link>
    <router-link to="/mail/sent">Sent Mail</router-link>      
</ul>
`,
    created() {
        console.log('Created mail menu', this.$route.fullPath)
    }
}