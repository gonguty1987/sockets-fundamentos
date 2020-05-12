const { io } = require('../server')

io.on('connection', (client) => {

    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'administrador',
        mensaje: 'bienvenido a la app'
    })


    client.on('disconnect', () => {
        console.log('usuario desconectado');

    });

    //escuchar el cliente ON
    client.on('enviarMensaje', (data, callback) => {
        //console.log(mensaje);
        //envia a todos los usuarios conectados
        //client.broadcast.emit('enviarMensaje', data)


        if (data.usuario) {
            callback({
                resp: 'TODO SALIO BIEN'
            })
        } else {
            callback({
                resp: 'TODO SALIO MAL'
            })
        }
    })

});