const mongoose = require('mongoose')

const Schema = mongoose.Schema

const inverterSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    number:{
        type:Number,
        required:true
    }
}, { timestamps: true })

module.exports = mongoose.model('Inverter', inverterSchema)

