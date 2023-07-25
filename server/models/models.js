const mongoose = require('mongoose')

const Schema = mongoose.Schema;


const restaurantSchema = new Schema({

    address : {
        building: String,
        coord: [], 
        street: String, 
        zipcode: String, 
    },

    borough: String, 
    cuisine: String,
    grades: [{date: Date, grade: String, score: Number},
        {date: Date, grade: String, score: Number},
        {date: Date, grade: String, score: Number},
        {date: Date, grade: String, score: Number}],
    name: String, 
    restaurant_id: String
})

const Restaurant = mongoose.model('restaurant', restaurantSchema)

module.exports = {
    Restaurant
}