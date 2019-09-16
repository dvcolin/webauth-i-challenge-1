const db = require('../../data/db-config.js');


module.exports = {
    get,
    findBy,
    findById,
    add

}

function get() {
    return db('users')
    .select()
}

function findBy(filter) {
    return db('users')
    .where(filter);
}

function findById(id) {
    return db('users')
    .first()
    .where('id', id)
}

function add(user) {
    return db('users')
    .insert(user)
    .then(res => {
        const [id] = res;
        return findById(id);
    })
}
