var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/People_db');
 
module.exports = connection;