

import { dotenv } from 'dotenv';
import { createServer } from 'http';

dotenv.config();

function requestController(){
    console.log('HOLA mundo!!!')
}

const server = createServer(requestController);

const PORT = process.env.PORT 

server.listen(PORT, function(){
    console.log('Aplcacion corriendo en el puerto: ' + PORT);
});