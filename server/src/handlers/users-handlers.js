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
                cxn.io.to(cxn.socket).emit('log-in-successful', foundUser);
            } else {
                cxn.io.to(cxn.socket).emit('log-in-failed', { error: 'login failed' });
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
                cxn.io.to(cxn.socket).emit('user-creation-successful', user);
            })
            .catch(err => { throw err });
}