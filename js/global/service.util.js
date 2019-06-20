

function store(key, any) {
    localStorage[key] = JSON.stringify(any);
}

function load(key) {
    var str = localStorage[key] || 'null';
    return JSON.parse(str);
}

function getById(items, itemId) {
    const item = items.find(item => item.id === itemId);
    return Promise.resolve(item)
}

export const storageService = {
    store,
    load,
    getById
}