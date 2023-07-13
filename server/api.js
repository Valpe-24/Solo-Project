const express = require("express")
const mongoose = require("mongoose")
const models = require('./models/models')

const PORT = 8080

const app = express();
const MONGO_URI = 
mongoose.connect(MONGO_URI, {
    
    dbName:'sample_restaurants'
})


app.get('/getrestaurants', 

async  (req, res, next) => {
    models.Restaurant.find({borough:'Manhattan', cuisine: 'Chicken'})
    .exec()

    .then((result) => {
        console.log(result);
        res.locals = result;
        next();
    })
    .catch((err) => {
        next(err);
    });

}, (req, res) => res.status(200).json(res.locals));


app.listen(PORT, () =>{
    console.log('Server running in port 8080')
})