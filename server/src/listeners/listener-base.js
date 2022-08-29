module.exports = class Listener {
    constructor(io, socket) {
        this.io = io;
        this.socket = socket;
    }
}