import express, { Application } from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path'
import dbConnection from '../database/config';

class Server {
    private app: Application;
    private port: string;
    private server: http.Server;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.server = http.createServer(this.app);

        dbConnection();
    }

    private middlewares() {
        this.app.use(express.static(path.resolve(__dirname, '..', '..', 'public')));
        this.app.use(cors());
        this.app.use(express.json());

        this.app.use('/auth', require('../router/auth'));
    }

    public listen() {
        this.middlewares();

        this.server.listen(this.port, () => {
            console.log(`Listening on Port: ${this.port}`);
        });
    }
}

export default Server;
