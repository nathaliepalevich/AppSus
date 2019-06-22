import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import notesCmp from './pages/note-app.cmp.js'
import inbox from '../mail.app/mail-pages/inbox.cmp.js'
import composeMail from '../mail.app/mail-pages/compose.cmp.js'
import mailDetails from '../mail.app/mail.cmps/mail-details.cmp.js'


export default [
    { path: '/', component: homepageCmp },
    {path: '/mail', component: mailCmp,
    children: [
        // { path: '/inbox', components: inbox },
        { path: '/mail/:mailId', component: mailDetails },
        // { path: '/sent', components: mailCmp },
        // {path: '/compose', components: composeMail}
    ]
},
{path: '/compose', components: composeMail},
{ path: '/inbox', components: inbox },
    { path: '/missKeep', component: notesCmp }
]
// starred
//sent-mail
//drafts
