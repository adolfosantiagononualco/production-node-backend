

const http = require('http')

function requestController(){
    console.log('HOLA MUNDO')
}

const server = http.createServer(requestController);

server.listen(3000)