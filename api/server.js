const express = require('express');
const helmet = require('helmet');
const dbConnection = require('../data/db-config.js');
const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);

const userRouter = require('./routes/user-router.js');
const loginRouter = require('./routes/login-router.js');
const registerRouter = require('./routes/register-router.js');

const server = express();

const sessionConfig = {
    name: 'yaBoi',
    secret: 'im mr meeseeks, look at me!',
    cookie: {
        maxAge: 1000 * 60 * 10,
        secure: false,
    },
    httpOnly: true,
    resave: false,
    saveUninitialized: false,

    store: new KnexSessionStore({
        knex: dbConnection,
        tablename: 'knexsessions',
        sidfieldname: 'sessionid',
        createtable: true,
        clearInterval: 1000 * 60 * 30
    })
}

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use('/api/users', userRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);


server.get('/api/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            res.status(200).json({ message: 'Log out successful' })
        });
    } else {
        res.status(200).json({ message: 'Already logged out' })
    }
})


module.exports = server;