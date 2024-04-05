const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  //Get token from header
  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  //verify token
  try {
    const decoded = jwt.verify(token, process.env.JWTSECRET);

    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: 'token not valid' });
  }
};
