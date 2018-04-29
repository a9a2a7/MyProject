var mongoose = require("mongoose"),
 Schema = mongoose.Schema,
 objectId = mongoose.Schema.ObjectId;
 
var peopleSchema = new Schema({
 _id: { type: objectId, auto: true },
 name: { type: String, required: true },
 phone: { type: String, required: true },
 jop: { type: String, required: true },
 location: { type: String, required: true }
}, {
 versionKey: false
});
 
var people = mongoose.model('people', peopleSchema);
 
module.exports = people;
