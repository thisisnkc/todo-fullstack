const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const goalSchema = mongoose.Schema({
     name:{
         type:String,
         required: [true , "Please add a text"]
     },
     email:{
         type:String,
         required: [true , "Please add a email"],
         unique:true
     },
     password:{
         type:String,
         required: [true , "Please add a password"]
     },
     tokens:[
        { token:{
             type : String,
             required:[true]
         }}
     ]
},{
    timestamps: true
})

goalSchema.methods.generateAuthToken = async function (){
    try{
        let token = jwt.sign({_id:this._id},process.env.SCERET_KEY)
        this.tokens = this.tokens.concat({token:token});  //the 1st token is inside tokens , 2nd is defined just in the above line
        this.save();
        return token
    }
    catch(err){
        console.log(err);
    }
}

module.exports = mongoose.model("userdata" , goalSchema)