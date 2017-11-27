var request = require('./request');

exports.list = function(callback) {
  request.get('subscriptions', callback);
};
