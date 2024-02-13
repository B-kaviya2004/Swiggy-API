const mongoose = require('mongoose')

const restaurantsSchema = new mongoose.Schema({
    areaName : {
        type : String
    },
    avgRating : {
        type : Number
    },
    costForTwo : {
        type : String
    },
    cuisines : {
        type : Array
    },
    name : {
        type : String
    }  
})
const Restaurant = mongoose.model('restaurantList', restaurantsSchema)

const userSchema = new mongoose.Schema({     // Schema is a constructor
    contact : {
        type : Number
    },
    userName : {
        type : String,
        //required : true,
        //unique : true
    },
    email : {
        type : String,
       // required : true,
       // unique : true
    },
    password : {
        type : String,
       // required : true
    }
},{versionKey : false})

//model
const Users = mongoose.model('userDetails', userSchema)


module.exports = {Restaurant , Users}