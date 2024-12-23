require('dotenv').config();
const app = require("../apptest")
const supertest = require("supertest")
const request = supertest(app)


describe('Test Handlers', () => {
    test('responds to /bookItems/', async () => {
        const res = await request.get('/bookItems/')
        expect(res.header['content-type']).toBe('application/json; charset=utf-8')
        expect(res.statusCode).toBe(200)
    })

    test('responds to /bookItems/:bookItemId', async () => {
        const res = await request.get('/bookItems/674fff809877b9bd715ea1fc');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })

    test('responds to /bookItems/:bookItemId/details', async () => {
        const res = await request.get('/bookItems/674fff809877b9bd715ea1fc/details');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200)
    })
})