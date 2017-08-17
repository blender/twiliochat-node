var express = require('express');
var router = express.Router();
var TokenService = require('../services/tokenService');

// POST /token
router.post('/', function(req, res) {
  var deviceId = req.body.device;
  var identity = req.body.identity;
  var ttl = req.body.ttl || 3600;

  var token = TokenService.generate(identity, deviceId, ttl)

  res.json({
    identity: identity,
    token: token.toJwt(),
  });
});


module.exports = router;
