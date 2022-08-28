const Listener = require('./listener-base');
const {
    handleLogInAttempt,
    createNewUser
} = require('../handlers/users-handlers');

module.exports = class UsersListener extends Listener {

    constructor(io, socket, connection) {
        super(io, socket);
        this.connection = connection;
    }

    listen() {
        this.socket.on('login-attempt', credentials => handleLogInAttempt(this.connection, credentials));
        this.socket.on('new-user-submission', newUser => createNewUser(this.connection, newUser));
    }
}