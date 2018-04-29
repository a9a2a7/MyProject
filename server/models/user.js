var mongoose = require("mongoose"),
 Schema = mongoose.Schema;
var bcrypt=require("bcrypt-nodejs");

var userSchema = new Schema({
 U_name: { type: String,lowercase:true , required: true, unique:true },
 U_pwd: { type: String, required: true }
}, {
 versionKey: false
});
 
userSchema.pre('save',function(next){
    var user=this;
    bcrypt.hash(user.U_pwd,null,null,function(err,hash){
        if(err) return next(err);
        user.U_pwd=hash;
        next();
    });
});

userSchema.methods.comparepwd=function(U_pwd){
    return bcrypt.compareSync(U_pwd, this.U_pwd);
};

var user = mongoose.model('user', userSchema);
 


module.exports = user;
