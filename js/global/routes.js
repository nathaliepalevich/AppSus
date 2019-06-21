import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import misskeepCmp from './pages/missKeepApp.cmp.js'
import maildetailsCmp from '../mail.app/mail.cmps/mail-details.cmp.js';

export default [
    { path: '/', component: homepageCmp },
    { path: '/mail', component: mailCmp },
    { path: '/missKeep', component: misskeepCmp },
    { path: '/mail/:mailId', component: maildetailsCmp }
]