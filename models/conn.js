const pgp = require('pg-promise') ({
    query: e => {
        console.log('QUERY:', e.query);
    }
})

const options = {
    host: 'localhost',
    database: 'skateparks_review',
    user: 'prescottsun',
    password: 'password'
}

const db = pgp(options);

module.exports = db;