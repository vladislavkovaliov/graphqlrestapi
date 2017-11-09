const api = require('./api.router');
const express = require('express');

const rest = express.Router();

rest.use('/api', api);

module.exports = rest;
