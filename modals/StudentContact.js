const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    name:{
        type: String,
        require:true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    college:{
        type: String,
        require: true
    },
    city:{
        type: String,
        require: true
    },
    degree:{
        type:String,
        require:true
    },
    query:{
        type:String,
        require:true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Student',StudentSchema);