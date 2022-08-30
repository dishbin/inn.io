const Listener = require("../listeners/listener-base");
const UsersListener = require('../listeners/users-listeners');

class Connection {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
        this.location;
        console.log('new client connected');
        this.listen();
    }

    listen() {
        this.usersListener = new UsersListener(this.io, this.socket, this);
    }

    relocate(location) {
        this.location = location;
        this.socket.join(location);
    }
}

module.exports = function connect(io) {
    io.on('connection', socket => new Connection(io, socket));
}