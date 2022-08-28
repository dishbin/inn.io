const mongoose = require('../db/connection');

const UserSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;