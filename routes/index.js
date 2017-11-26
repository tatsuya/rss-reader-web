var express = require('express');
var router = express.Router();

var feed = require('../lib/feed');

/* GET home page. */
router.get('/', function(req, res, next) {
  feed.list(function(err, feeds) {
    if (err) {
      return next(err);
    }
    res.render('index', {
      title: 'RSS Reader',
      feeds: feeds
    });
  });
});

module.exports = router;
