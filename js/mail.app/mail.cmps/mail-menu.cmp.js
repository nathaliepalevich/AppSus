
export default {
    name: 'mail-menu',
    template: `
    <nav class="mail-menu flex column">
        <router-link to="/mail/compose">Compose</router-link>
        <router-link exact to="/mail/inbox">Inbox</router-link>
        <router-link to="/mail/sent">Sent Mail</router-link>
    </nav>
    `,
    created() {
        console.log('Created mail menu', this.$route.fullPath)
    },

}