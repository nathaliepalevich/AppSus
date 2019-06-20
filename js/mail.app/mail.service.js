import makeId from '../../global/global.service.util.js'

let gMails = []
_createMails()

function _createMails() {
    gMails.unshift(createMail(subject = 'First Mail', body = 'Hey Nathalie!'))  
    gMails.unshift(createMail(subject = 'Second Mail', body = 'Don\'t you miss the beach?'))      
}

function createMail(subject = '', body = '') {
    return { id: makeId(), subject, body, isRead: false, sentAt: new Date(), priority: 0 }
}

