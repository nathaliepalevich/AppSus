import homepageCmp from '../global/pages/homepage.cmp.js'
import mailCmp from '../global/pages/mail-app.cmp.js'
import missKeepCmp from './pages/missKeepApp.cmp.js'

export default [
    { path: '/', component: homepageCmp },
    { path: '/mail', component: mailCmp },
    { path: '/missKeep', component: missKeepCmp }
]