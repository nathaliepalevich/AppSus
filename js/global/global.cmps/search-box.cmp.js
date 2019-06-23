'use strict'
import mailFilter from '../../mail.app/mail.cmps/mail-filter.cmp.js'
import noteFilter from '../../note.app/cmps/note-filter.cmp.js'

export default {
    name: 'search-box',
    template: `
        <div class="search-box"> 
        <mail-filter v-if="component === 'mail-filter'">  </mail-filter>
        <note-filter v-if="component === 'note-filter'"></note-filter>
        </div>
    `,
    components: {
        mailFilter,
        noteFilter
    },
    computed: {
        component() {
            let curPath = this.$route.fullPath;
            if (curPath === '/mail') return 'mail-filter'
            else if (curPath === '/missKeep') return 'note-filter'
        }
    }
}