'use strict'

export default {
    name: 'main-navbar',
    template: `
    <nav class="main-navbar">
        <router-link to="/" exact>Homepage</router-link>
        <router-link to="/mail">Mail</router-link>
        <router-link to="/missKeep">Miss Keep</router-link>
    </nav>
  `
}