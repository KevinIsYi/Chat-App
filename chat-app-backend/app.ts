import dotenv from 'dotenv';
import Server from './models/server';
import dbConnection from './database/config';

dotenv.config();

const server = new Server();
server.listen();
dbConnection();