import util from '../global/service.util.js'

const MAIL_KEY = 'savedMail'
let gMails = []
createMails() 

function createMails() {
    gMails.unshift(createMail('First Mail', 'Hey Nathalie!', 'Michael'))  
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie'))    
   util.store(MAIL_KEY, gMails) 
   
}

function createMail(subject = '', body = '', from='') {
    return { id: util.makeId(), subject, body, isRead: false, sentAt: util.formatAMPM(new Date), priority: 0, from }
}

function getById(mailId) {
    const item = gMails.find(mail => mail.id === mailId);
    return item
}

export default {
    gMails,
    getById
}