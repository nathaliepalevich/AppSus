import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import composeMailCmp from '../mail.app/mail.cmps/mail-compose.cmp.js'
import missKeepCmp from './pages/missKeepApp.cmp.js'


export default [
    { path: '/', component: homepageCmp },
    {
        path: '/mail', component: mailCmp, children: [
            {path: '/compose', components: mailCmp},
            { path: '/inbox', components: mailCmp },
            { path: '/sent', components: mailCmp }
        ]
    },
    { path: '/missKeep', component: missKeepCmp }
]
// starred
//sent-mail
//drafts