const Listener = require('./listener-base');
const {
    handleLogInAttempt,
    createNewUser
} = require('../handlers/users-handlers');

module.exports = class UsersListener {

    constructor(io, socket, connection) {
        this.io = io;
        this.socket = socket;
        this.connection = connection;
        
        this.socket.on('log-in-attempt', credentials => handleLogInAttempt(this.connection, credentials));
        this.socket.on('new-user-submission', newUser => createNewUser(this.connection, newUser));
        
    }
}