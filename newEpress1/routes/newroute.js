var express = require('express');
var router = express.Router();

/* GET new route */
router.get('/', function(req, res, next) {
    res.send('this is the new route');
});

module.exports = router;
