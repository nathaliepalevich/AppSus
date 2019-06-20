import util from '../global/service.util.js'

const MAIL_KEY = 'savedMail'
let gMails = []
createMails() 

function createMails() {
    gMails.unshift(createMail('First Mail', 'Hey Nathalie!'))  
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?'))    
   util.store(MAIL_KEY, gMails) 
   
}

function createMail(subject = '', body = '') {
    return { id: util.makeId(), subject, body, isRead: false, sentAt: new Date(), priority: 0 }
}


export default {
    createMails
}