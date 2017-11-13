const api = require('./api.router');
const auth = require('./auth.router');
const express = require('express');

const rest = express.Router();

rest.use('/api', api);
rest.use('/auth', auth);

module.exports = rest;
