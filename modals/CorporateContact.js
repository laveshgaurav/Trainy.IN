const mongoose = require('mongoose');

const CorporateSchema = mongoose.Schema({
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
    company: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
     },
    position: {
        type: String,
        require: true
    },
    department: {
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

module.exports = mongoose.model('Corporate', CorporateSchema);