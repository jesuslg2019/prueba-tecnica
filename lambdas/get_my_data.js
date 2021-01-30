const serverless = require('serverless-http')
const express = require('express')
const app = express()
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const dynamoDb = new AWS.DynamoDB.DocumentClient()

app.get('/my-data', async (req, res) => {
    try {
        const params = { TableName: 'mydata' }
        // obtengo los items dynamodb
        let result = {}
        await dynamoDb.scan(params, function (err, data) {
            if (err) console.log(err);
            else result = data;
        }).promise()

        res.send({
            status: 200,
            message: "ok",
            data: result
        })
    } catch (error) {
        throw new Error("data not found")
    }
})

module.exports.handler = serverless(app)

