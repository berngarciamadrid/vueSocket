'use strict'
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// Objeto de Usuarios, que se conectan a nuestra app
let users = {};

app.get('/', (req, res) => {
    res.send('socketio...');
});

// Iniciar conexión del socket.io
io.on('connection', (socket) => {
    console.log("Nuevo Socket conectado ");

    socket.on('increment', (counter) => {
        console.log("increment");
        io.sockets.emit('COUNTER_INCREMENT', counter + 1);
        // Eventos (1-EL EVENTO QUE EMITIMOS AL CLIENTE, 2-EL DATO QUE DEVOLVEMOS
        // AL CLIENTE),  Emitimos para todos los clientes de esta manera
    });

    socket.on('decrement', (counter) => {
        console.log("decrement");
        io.sockets.emit('COUNTER_DECREMENT', counter - 1);
        // Eventos (1-EL EVENTO QUE EMITIMOS AL CLIENTE, 2-EL DATO QUE DEVOLVEMOS
        // AL CLIENTE), 
        //Emitimos a todos
    });

    // Eventos Chat
    // Login
    socket.on('login', (username) => {
        console.log('LOGIN');
        if (users[username]) {
            // Si existe el nombre, no puede registrarse
            socket.emit('USER_EXISTS');
            return
        };

        socket.username = username;
        users[username] = username;

        socket.emit('LOGIN', {
            username: socket.username,
            users
        });

        // Emitimos a todos menos al que ha emitido el evento
        socket.broadcast.emit('USER_JOINED', {
            username: socket.username,
            users
        });
    });

    socket.on('newMessage', (message) => {
        console.log('NEW MESSAGE');
        socket.broadcast.emit("NEW_MESSAGE", `${socket.username}: ${message}`);
        socket.emit('NEW_MESSAGE', `Yo: ${message}`);
    });


    socket.on('disconnect', () => {
        if (users[socket.username]) {
            delete users[socket.username];
            // Se desconecta del chat
            socket.broadcast.emit('USER_LEFT', {
                username: socket.username,
                users
            });
        }
    });
});

http.listen(5000, () => {
    console.log("listening on *:5000");
});

module.exports = app;