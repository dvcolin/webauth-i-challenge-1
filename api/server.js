const express = require('express');
const helmet = require('helmet');

const userRouter = require('./routes/user-router.js');
const loginRouter = require('./routes/login-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/users', userRouter);
server.use('/api/login', loginRouter);


module.exports = server;