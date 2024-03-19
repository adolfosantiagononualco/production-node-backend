require('dotenv').config();
import { createServer } from 'http';

function requestController(){
    console.log('HOLA mundo!!!')
}

const server = createServer(requestController);

const PORT = process.env.PORT 

server.listen(PORT, function(){
    console.log('Aplcacion corriendo en el puerto: ' + PORT);
});