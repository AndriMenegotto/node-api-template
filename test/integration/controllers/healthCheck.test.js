const request = require('supertest')
const httpStatus = require('http-status')

const app = require('../../../src/app.js')

describe('GET /health', () => {
    it('should return status 200 OK', async (done) => {
        const response = await request(app)
            .get('/health')
        expect(response.status).toEqual(httpStatus.OK)
        done()
    })
})

describe('GET /healthy', () => {
    it('should return 404 NOT FOUND', () => {
        return request(app)
            .get('/healthy')
            .then((res) => {
                expect(res.status).toEqual(httpStatus.NOT_FOUND)
            })
    })
})