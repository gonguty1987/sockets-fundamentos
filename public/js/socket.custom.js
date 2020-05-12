var socket = io();
socket.on('connect', function () {
    console.log('conectado al servidor');
})
//escuchar ON
socket.on('disconnect', function () {
    console.log('perdimos conexion con el servidor');
})

//enviar informacion EMIT
socket.emit('enviarMensaje', {
    usuario: 'Gonzalo',
    mensaje: 'hola mundo'
}, function (resp) {
    console.log('respuesta server: ' + JSON.stringify(resp))
});

//escuchamos
socket.on('enviarMensaje', function (mensaje) {
    console.log('servidor' + JSON.stringify(mensaje));
});

