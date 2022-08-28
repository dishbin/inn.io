const Listener = require("../listeners/listener-base");

class Connection extends Listener {
    constructor(io, socket) {
        super(io, socket);
    }

    listen() {
        this.usersListener = new UsersListener(io, socket, this);
    }
}

module.exports = function connect(io) {
    io.on('connection', socket => new Connection(io, socket));
}