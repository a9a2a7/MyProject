var express = require("express"),
 router = express.Router(),
 people = require("../models/people.js");
 
router.get("/", function(req, res) {
 people.find({}, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data);
 });
}).get("/:id", function(req, res) {
 var id = req.params.id;
 people.find({ _id: id }, function(err, data) {
 if (err) {
 res.send("error");
 return;
 }
 res.send(data[0]);
 });
}).post("/", function(req, res) {
 var obj = req.body;
 var model = new people(obj);
 model.save(function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("created");
 });
}).put("/:id", function(req, res) {
 var id = req.params.id;
 var obj = req.body;
 
 people.findAndUpdate(id, { name: obj.name, phone: obj.phone, jop: obj.jop ,location: obj.location }, 
function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("updated");
 });
}).delete("/:id", function(req, res) {
 var id = req.params.id;
 people.findAndRemove(id, function(err) {
 if (err) {
 res.send("error");
 return;
 }
 res.send("deleted");
 });
});
 
module.exports = router;