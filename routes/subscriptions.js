var express = require('express');
var router = express.Router();

var subscription = require('../lib/subscription');

router.get('/', function(req, res, next) {
  console.log('Getting current subscriptions...');
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

router.post('/', function(req, res, next) {
  subscription.subscribe(req.body.url, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/subscriptions');
  });
});

router.post('/:id/delete', function(req, res, next) {
  var id = req.params.id;
  console.log('Unsubscribing ' + id);
  subscription.unsubscribe(id, function(err) {
    if (err) {
      return next(err);
    }
    res.redirect('/subscriptions');
  });
});

module.exports = router;
