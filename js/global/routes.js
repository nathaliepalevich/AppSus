import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import notesCmp from './pages/note-app.cmp.js'
import maildetailsCmp from '../mail.app/mail.cmps/mail-details.cmp.js';
import inbox from '../mail.app/mail-pages/inbox.cmp.js'
import composeMail from '../mail.app/mail.pages/mail-compose.cmp.js';



export default [
    { path: '/', component: homepageCmp },
    {path: '/mail', component: mailCmp, children: [
        { path: '/mail/:mailId', component: maildetailsCmp },
        { path: '/mail/inbox', components: inbox },
        // {path: '/mail/compose', components: composeMail},
        // { path: '/sent', components: mailCmp }
    ]},
    { path: '/mail/:mailId', component: maildetailsCmp },
    { path: '/missKeep', component: notesCmp }


]
// starred
//sent-mail
//drafts
