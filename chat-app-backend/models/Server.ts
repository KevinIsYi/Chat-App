import express, { Application } from 'express';
import { Server as HttpServer, createServer } from 'http';
import cors from 'cors';
import path from 'path'
import dbConnection from '../database/config';
import { Sockets } from './Sockets';

class Server {
    private app: Application;
    private port: string;
    private server: HttpServer;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.server = createServer(this.app);

        dbConnection();
        new Sockets(this.server);
    }

    private middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
        this.app.use(cors());
        this.app.use(express.json());

        this.app.use('/auth', require('../router/auth'));
        this.app.use('/user', require('../router/user'));
    }

    private configureSockets() {

    }

    public listen() {
        this.middlewares();

        this.server.listen(this.port, () => {
            console.log(`Listening on Port: ${this.port}`);
        });
    }
}

export default Server;
