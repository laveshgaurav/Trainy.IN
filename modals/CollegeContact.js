const mongoose = require('mongoose');

const CollegeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    college: {
        type: String,
        require: true
    },
    designation: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    query: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('College', CollegeSchema);