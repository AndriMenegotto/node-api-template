const healthCheck = require('../../../src/controllers/healthCheck')
const httpStatus = require('http-status')

const expectedResponse = JSON.stringify({ status: httpStatus.OK, message: 'OK' })

describe('healthCheck controller', () => {
    beforeEach(() => {
        response = {
            setHeader: jest.fn(),
            end: jest.fn().mockReturnValue(expectedResponse)
        }
    })

    it('should return 200 OK as status code', () => {
        healthCheck(null, response)

        expect(response.setHeader).toHaveBeenCalled()
        expect(response.end).toHaveBeenCalledWith(expectedResponse)
    })
})