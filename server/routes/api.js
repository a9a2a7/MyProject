var express = require('express'),
 router = express.Router();
router.use("/people", require("../controllers/people.api"));
router.use("/user",require("../controllers/user.api"));
 var app = express();


var User=require("../models/user");
router.post('/auth',function(req,res){
    User.findOne({ U_name: req.body.U_name}).select('U_name U_pwd').exec(function(err,user){
        
        if(err) throw err;
        if(user==null){
            res.json({success:false, message: 'Username or Password is uncorrect'});
        } else if(user!=null){
            if(req.body.U_pwd){
           var validatepwd= user.comparepwd(req.body.U_pwd);
            }else{
                res.json({success:false, message: 'could not find pwd'});
            }
           if(!validatepwd){
            res.json({success:false, message: 'could not auth'});
           }else{
            res.json({success:true, message: 'login successfully',uname:req.body.U_name});
            
           }
           
        
        }
    });
});

module.exports = router;