var Config = {};

if(process.env.NODE_ENV === 'production') {
  Config.firebaseUrl = 'https://watch-edition-prod.firebaseIO.com';
} else {
  Config.firebaseUrl = 'https://watch-edition-dev.firebaseIO.com';
}

module.exports = Config;
