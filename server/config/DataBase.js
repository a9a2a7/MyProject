var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://a9a2a7:a992102207@ds217310.mlab.com:17310/people');
 
module.exports = connection;
