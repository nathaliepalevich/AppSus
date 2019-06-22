import util from '../global/service.util.js'

const formatedTime = util.formatAMPM(new Date)
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

// function filter(whatToFilter, filter){
//     var filtered = whatToFilter.slice();
//     filtered = whatToFilter.filter(whatToFilter => {
//         return (whatToFilter.indexOf(filter) !== -1  || filter === '') 
//     });
// return filtered
// }

function createMails() {
    createMail('First Mail', 'Hey Nathalie!', 'Michael')
    createMail('Second Mail', 'Don\'t you miss the beach?', 'Nathalie', true)
    createMail('Third Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Fourth Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Fifth Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Six Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Seven Mail', 'Don\'t you miss the beach?', 'Nathalie', true)
    createMail('Eigth Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Nine Mail', 'Don\'t you miss the beach?', 'Nathalie')
    createMail('Ten Mail', 'Don\'t you miss the beach?', 'Nathalie', true)
    return gMails
}

function createMail(subject = '', body = '', from = '', isRead = false) {
    return gMails.unshift({ id: util.makeId(), subject, body, isRead, sentAt: formatedTime, priority: 0, from })
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
    getEmails,
    createMail
    // filter
}