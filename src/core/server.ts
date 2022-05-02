import express, {Express, Request, Response} from 'express';
import {version} from '../../package.json';

// Express server
const server: Express = express();

server.set('port', parseInt(process.env.PORT, 10) || 3000);

server.use(express.json({limit: '500mb'}));
server.use(express.urlencoded({extended: true}));

server.get('/v1/health', (request: Request, response: Response) => {
    response
        .set({
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/health+json'
        })
        .send({
            status: 'pass',
            version: '1',
            releaseId: version
        });
});

export {server};
