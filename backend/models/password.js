const mongoose = require('mongoose')

const passwordSchema = new mongoose.Schema({
    site :{
        type:String ,
        require: true
    },
    username: {
        type:String ,
        require: true
    },
    password : {
        type:String,
        require : true
    },
    iv : {
        type: String,
        require: true
    }


}) 

const Password = mongoose.model('password', passwordSchema)
module.exports = Password;

