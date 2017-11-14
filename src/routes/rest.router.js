const api = require('./api.router');
const auth = require('./auth.router');
const profile = require('./profile.router');
const express = require('express');

const rest = express.Router();

rest.use('/auth', auth);
rest.use('/api', api);
rest.use('/api', profile);

module.exports = rest;
