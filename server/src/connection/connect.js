class Connection {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
        this.listen();
    }

    listen() {
        
    }
}

module.exports = function connect(io) {
    io.on('connection', socket => new Connection(io, socket));
}