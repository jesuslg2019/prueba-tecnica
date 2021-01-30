const assert = require('assert')
const lammbda_get = require('../lambdas/get')

describe('Service response getService test', async () => {
    it('should return status 200', async () => {
        let { statusCode } = await lammbda_get.handler()
        assert.equal(statusCode, 200)
    })
    it('should return message ok', async () => {
        let { body } = await lammbda_get.handler()
        let { message } = JSON.parse(body)
        assert.equal(message, "ok")
    })
})
