const db = require('../../data/db-config.js');


module.exports = {
    get,
    findBy

}

function get() {
    return db('users')
    .select()
}

function findBy(filter) {
    db('users')
    .where(filter);
}
