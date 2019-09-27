const jwt = require('jsonwebtoken');
const nconf = require('nconf');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');
  if(!token) return res.status(401).send('Access denied. No token provided.');

  try {
    const decoded = jwt.verify(token, nconf.get('jwtPrivateKey'));
    req.user = decoded;
    next();
  }
  catch (ex) {
    res.status(400).send('Invalid token');
  }
}
