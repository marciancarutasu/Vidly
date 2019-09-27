const nconf = require('nconf');

nconf.argv().env();
nconf.file({
  file: './config/default.json'
});

module.exports = function() {
  if (!nconf.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined');
  }
}
