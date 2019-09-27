const express = require('express');
const nconf = require('nconf');
const helmet = require('helmet');
const app = express();

require('./startup/logging')();
require('./startup/routes')(app);
require('./startup/db')();
require('./startup/config')();
require('./startup/validation')();

app.use(helmet());

app.listen(nconf.get('http:port'), () => {
  console.log(`Server started on port: ${nconf.get('http:port')}.`);
});
