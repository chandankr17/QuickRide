const http = require('http');
const app = require('./app');
const { Server } = require('socket.io');
require('dotenv').config();

const port = process.env.PORT || 4000;

// Create HTTP server
const server = http.createServer(app);

// Attach Socket.IO to the SAME server
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
});

// Socket connection
io.on('connection', (socket) => {
    console.log('Socket connected:', socket.id);

    socket.on('disconnect', () => {
        console.log('Socket disconnected:', socket.id);
    });
});

// Start server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
