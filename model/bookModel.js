const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title:{
        type: String,
        required: true
    } ,
    author: {
        type: String,
        required: true
    } ,
    year: {
        type: String,
        required: true
    } ,
    genre:{
        type: String,
        required: true
    } ,
    available:{
        type: Boolean,
        required: true
    } 
}, {timestamps: true})

module.exports = mongoose.model("Book", bookSchema)