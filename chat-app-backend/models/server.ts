import express, { Application } from 'express';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`Listening on Port: ${this.port}`);
        });
    }
}

export default Server;
