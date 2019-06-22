import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import mailListCmp from '../mail.app/mail.cmps/mail.list.cmp.js'
import composeMailCmp from '../mail.app/mail.pages/mail-compose.cmp.js'
import missKeepCmp from './pages/missKeepApp.cmp.js'

export default [
    { path: '/', component: homepageCmp },
    {
        path: '/mail', component: mailCmp, children: [
            { path: '/inbox', components: mailListCmp },
            { path: '/compose', components: composeMailCmp },
            // { path: '/inbox', components: mailCmp },
            // { path: '/sent', components: mailCmp }
        ]
    },
    { path: '/missKeep', component: missKeepCmp }
]
// starred
//sent-mail
//drafts