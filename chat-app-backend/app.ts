import dotenv from 'dotenv';
import Server from './models/server';

dotenv.config();

const server = new Server();
server.listen();
console.log("HOla mundo!");
