const fetch = require('node-fetch');
const config = require('../config/config');
const argv = require('minimist')(process.argv.slice(2));

function configMiddleware(req, res, next) {
  const { heroku, local } = config.env;

  switch(argv.env) {
    case heroku: {
      herokuConfig(req, res, next);
      break;
    }
    case local: {
      localConfig(req, res, next);
      break;
    }
    default: {
      break;
    }
  }
}

function herokuConfig(req, res, next) {
  const {
    url:     urlHerokuConfig,
    headers: herokuHeaders,
    apiKey    
  } = config.heroku.configVars;

  fetch(urlHerokuConfig, {
    method: 'GET',
    headers: Object.assign(
      {}, 
      herokuHeaders, 
      {
        Authorization: `Bearer ${apiKey}`
      })
  })
  .then(response => response.json())
  .then(json     => res.json(json));  
}

function localConfig(req, res, next) {
  res.json({ status: 'in dev'});
}

module.exports = [configMiddleware];