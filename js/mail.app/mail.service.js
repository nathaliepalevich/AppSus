import util from '../global/service.util.js'

// const formatedTime = formatAMPM(new Date)
const MAIL_KEY = 'savedMail'
var gMails = []


function getEmails() {
    let eMails = load(MAIL_KEY)
    if (eMails) gMails = eMails
    else {
        gMails = createMails()
        store(MAIL_KEY, gMails)
    }
    return Promise.resolve(gMails)
}

function createMails() {
    gMails.unshift(createMail('First Mail', 'Hey Nathalie!', 'Michael'))
    gMails.unshift(createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie', true))
    gMails.unshift(createMail('Third Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Fourth Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Fifth Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Six Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Seven Mail', 'Don\'t you miss the beach?', 'Nathalie', true))
    gMails.unshift(createMail('Eigth Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Nine Mail', 'Don\'t you miss the beach?', 'Nathalie'))
    gMails.unshift(createMail('Ten Mail', 'Don\'t you miss the beach?', 'Nathalie', true))
    return gMails
}

function createMail(subject = '', body = '', from = '', isRead = false) {
    return { id: util.makeId(), subject, body, isRead, sentAt: '00:00', priority: 0, from }
}

function getById(mailId) {
    const item = gMails.find(mail => mail.id === mailId);
    return item
}

function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str)
}


export default {
    store,
    load,
    getById,
    getEmails
}