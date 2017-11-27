var request = require('request');
var url = require('url');

var RSS_READER_API_URL = process.env.RSS_READER_API_URL || 'http://localhost:5000';

exports.get = function(path, callback) {
  request(url.resolve(RSS_READER_API_URL, path), function(err, res, body) {
    if (err) {
      return callback(new Error('Error on RSS reader API: ' + err.message));
    }

    if (res.statusCode !== 200) {
      return callback(new Error('Status code is not 200 but is ' + res.statusCode));
    }

    var obj;
    try {
      obj = JSON.parse(body)
    } catch (err) {
      return callback(new Error('Unable to parse json: ' + e.message));
    }

    return callback(null, obj);
  });
};
