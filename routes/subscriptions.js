var express = require('express');
var router = express.Router();

var subscription = require('../lib/subscription');

router.get('/', function(req, res, next) {
  subscription.list(function(err, subscriptions) {
    if (err) {
      return next(err);
    }
    res.render('subscriptions', {
      title: 'RSS reader - Subscriptions',
      subscriptions: subscriptions
    });
  });
});

module.exports = router;
