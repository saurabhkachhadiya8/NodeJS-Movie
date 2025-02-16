const mongoose = require('mongoose');
const movieSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});
const movies = mongoose.model('movies',movieSchema);
module.exports = movies;