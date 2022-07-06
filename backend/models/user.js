const mongoose= require('mongoose');
const userShema= mongoose.Schema({
    firstname:{type: String, require:true},
    lastname:{type: String, require:true},
    email:{type: String, require:true , unique:true},
    phonenumber:{type: String, require:true },
    password:{type: String, require:true}
})
const user=mongoose.model('user',userShema)
module.exports=user