var express = require('express');
var router = express.Router();

var HeaderInspect = require('../utils/header_inspect');

router.get('/whoami', function(req,res){
  res.json(
      {
        "ipaddress": req.ip,
        "language": HeaderInspect.first_lang(req),
        "system": HeaderInspect.user_system(req)
      }
      )
})
module.exports = router;
