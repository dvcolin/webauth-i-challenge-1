const express = require('express');
const helmet = require('helmet');
const session = require('express-session');

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
}

server.use(express.json());
server.use(helmet());
server.use(session(sessionConfig));

server.use('/api/users', userRouter);
server.use('/api/login', loginRouter);
server.use('/api/register', registerRouter);


module.exports = server;