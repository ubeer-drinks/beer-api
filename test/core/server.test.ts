import request from 'supertest';
import {server} from '../../src/core/server';

describe('core/server.ts', () => {
    test('/v1/health', async () => {
        const response = await request(server).get('/v1/health');

        expect(response.statusCode).toBe(200);
        expect(response.headers['cache-control']).toBe('no-cache');
        expect(response.headers['content-type']).toMatch(/application\/health\+json/);
    });
});
