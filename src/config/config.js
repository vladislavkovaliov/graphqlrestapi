module.exports = {
  heroku: {
    configVars: {
      url: 'https://api.heroku.com/apps/graphqlrestapi/config-vars',
      apiKey: '8276f141-b9f8-4ade-872f-9712aaab9f55',
      headers: {
        Accept: 'application/vnd.heroku+json; version=3'
      }
    }
  },
  mongo: {
    mlab: {
      url: 'ds159676.mlab.com:59676',
      user: 'mlabuser',
      password: '123456',
      db: 'graphqlrestapi'
    },
    local: {
      url: 'localhost:27017',
      user: '',
      password: '',
      db: 'graphqlrestapi'      
    }
  },
  env: {
    heroku: 'heroku',
    local: 'local'
  }
};