var express = require('express'),
 path = require('path'),
 bodyParser = require('body-parser'),
 routes = require('./server/routes/web'),
 apiRoutes = require('./server/routes/api'),
 connection = require("./server/config/DataBase");
 var session=require('express-session');
 
 var app = express();
 
app.use(bodyParser.json());
 
app.use(session({secret:'iLoveuit'}));

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static('node_modules'));



app.use('/', routes);
app.use('/api', apiRoutes);
 
app.post('login',function(req,res){
    req.session.U_name=req.body.U_name;
});

app.get('/',function(req,res){
    console.log(req.session.U_name);
});



var port = process.env.port || 8888;
 

app.listen(port, function() {
 console.log("Server is running at : http://localhost:" + port);
});