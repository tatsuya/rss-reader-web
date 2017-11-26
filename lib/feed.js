var request = require('request');
var url = require('url');

var RSS_READER_API_URL = process.env.RSS_READER_API_URL || 'http://localhost:5000';

exports.list = function(callback) {
  request(url.resolve(RSS_READER_API_URL, 'feeds'), function(err, res, body) {
    if (err) {
      return callback(err);
    }

    if (res.statusCode !== 200) {
      console.log("Status code is not 200 but is " + res.statusCode);
      return callback(err);
    }

    var obj;
    try {
      obj = JSON.parse(body)
    } catch (e) {
      console.log("Failed to parse json: " + e.message);
    }

    return callback(null, obj);
  });
};
