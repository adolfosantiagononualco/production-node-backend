import { createServer } from 'http';

function requestController(){
    console.log('HOLA mundo!!!')
}

const server = createServer(requestController);

server.listen(3000)