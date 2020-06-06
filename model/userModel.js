const mongodb = require('mongodb');
var mongoose     = require('mongoose');
// var Schema       = mongoose.Schema;

var userSchema   = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },

    email: {
        type: String,
        trim: true
    },

    password: {
        type: String
    }
            });

module.exports = mongoose.model('User', userSchema);