'use strict'

export default {
  name: 'main-navbar',
  template: `
    <nav class="main-navbar">
      <div class="main-navbar-desktop">
        <router-link to="/" exact>Homepage</router-link>
        <router-link to="/mail">Mail</router-link>
        <router-link to="/missKeep">Miss Keep</router-link>
</div>

<div class="main-navbar-mobile">
<i class="navbar-hamburger" @click="isOpen = !isOpen" class="fas fa-bars"></i>
<div v-show="isOpen" class="flex flex-column">
      <router-link to="/" exact>Homepage</router-link>
        <router-link to="/mail">Mail</router-link>
        <router-link to="/missKeep">Miss Keep</router-link>
        
</div>
    </nav>
  `,
  data() {
    return {
      isOpen: false
    }
  },
}