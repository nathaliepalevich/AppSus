'use strict'

export default {
    name: 'app-logo',
    template: `
        <span class="app-logo">
        <h1 v-if="this.$route.path.includes('/mail')">Mail App</h1>
        <h1 v-else-if="this.$route.path === ('/missKeep')">Miss Keep</h1>
</span>

    `,

}