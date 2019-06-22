import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import notesCmp from './pages/note-app.cmp.js'
import maildetailsCmp from '../mail.app/mail.cmps/mail-details.cmp.js';
import composeMailCmp from '../mail.app/mail.pages/mail-compose.cmp.js'


export default [
    { path: '/', component: homepageCmp },
    {path: '/mail', component: mailCmp, children: [
        {path: '/compose', components: mailCmp},
        { path: '/inbox', components: mailCmp },
        { path: '/sent', components: mailCmp }
    ]},
    { path: '/mail/:mailId', component: maildetailsCmp },
    { path: '/missKeep', component: notesCmp }


]
// starred
//sent-mail
//drafts
