'use strict'
import mailPreview from './mail.preview.cmp.js'


export default {
    name: 'mail-list',
    template: `
    <section class="mail-list">
        <mail-preview class="flex" v-for="mail in mails"
        :key="mail.id"
        :mail="mail">
        </mail-preview>
    </section>   
    `,
    props: ['mails'],
    components: {
        mailPreview,
    },
}