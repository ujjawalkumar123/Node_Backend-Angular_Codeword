const mongoose = require('mongoose')


const schema = new mongoose.Schema({
    // name: {
    //     type: String,
    //     trim: true,
    //     required: [true, 'name missing']
    // },
    // location: {
    //     type: String,
    //     trim: true,
    //     required: [true, 'description missing']
    // },
    // isBooked :{
    //     type : String,
    //     default : "false"
    // }
    codeWordSetName: {
        type: String,
        required: [true, 'CodewordSet name missing']
    },
    count: {
        type: Number,
        required: [true, 'Count is missing']
    }
})

module.exports = mongoose.model('codewordset', schema)