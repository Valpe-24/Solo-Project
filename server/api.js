const express = require("express")
const mongoose = require("mongoose")
const models = require('./models/models')

const cors = require('cors')

const PORT = 8080

const app = express();
app.use(cors());

const MONGO_URI = 'mongodb+srv://valerieperez24:SykzJpjMsZmm7gL9@cluster0.w5unw82.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(MONGO_URI, {
    
    dbName:'sample_restaurants'
})


app.get('/getfood', 

async  (req, res, next) => {
    models.Restaurant.find({cuisine: 'Chicken'})
    .limit(5)
    .exec()

    .then((result) => {
        // console.log(result);
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