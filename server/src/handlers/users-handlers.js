const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

module.exports = {
    handleLogInAttempt,
    createNewUser
};

function handleLogInAttempt (cxn, credentials) {
    let result = false,
        foundUser;
    User.findOne({ name: credentials.name })
        .then(user => {
            foundUser = user;
            return bcrypt.compare(credentials.password, user.password);
        })
        .then(hashRes => {
            result = hashRes;
            if (result) {
                cxn.io.to(cxn.socket.id).emit('log-in-successful', {
                    name: foundUser.name,
                    email: foundUser.email,
                    id: foundUser._id
                });
                cxn.relocate('main lobby');
            } else {
                cxn.io.to(cxn.socket.id).emit('log-in-failed', { error: 'login failed' });
            }
        })
        .catch(err => { throw err });
}

async function createNewUser (cxn, newUser) {
    bcrypt.hash(newUser.password, 10)
            .then(hash => {
                return {
                    ...newUser,
                    password: hash
                }
            })
            .then(user => User.create(user))
            .then(user => {
                cxn.io.to(cxn.socket.id).emit('user-creation-successful', {
                    name: user.name,
                    email: user.email,
                    id: user._id
                });
                cxn.relocate('main lobby');
            })
            .catch(err => { throw err });
}