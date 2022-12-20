const mongoose = require("mongoose");
const SingupSchema= new mongoose.Schema({
    username:{type:String, require:true},
    email:{type:String, require:true,
        validate(value){
            if (!emailValidator.validate(value)){
                throw new Error("please provide Valid Email ID")
            }
        },
    
    },
    password:{type:String, require:true, min:8},
    confirmpassword:{type:String, require:true}

})
 
const singupmodel = mongoose.model("signup", SingupSchema);
module.exports = singupmodel;