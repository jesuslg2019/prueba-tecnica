const assert = require('assert')
const lambda_post = require('../lambdas/post')
const express = require('express')
const app = express()
const request = require("supertest-as-promised")

describe('Service response postService test', async () => {
    it('should return status 200', async () => {
        // console.log(await request(lambda_post.server()).post("/"))
        //     let { statusCode } = await lammbda_get.handler()
        //     assert.equal(statusCode, 200)
    })
    // it('should return message ok', async () => {
    //     let { body } = await lammbda_get.handler()
    //     let { message } = JSON.parse(body)
    //     assert.equal(message, "ok")
    // })
})
