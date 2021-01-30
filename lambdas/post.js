const serverless = require('serverless-http')
const express = require('express')
// const axios = require('axios')
const app = express()
const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { hash } = require('../tools/')
const { main } = require('../services/swapi')

app.post('/', async (req, res) => {
    const table = "mydata"
    const { service, number } = req.query
    //Obtengo el planeta para setear a la bd
    const data = await main(service, number)

    //Armo el json para setear
    var params = {
        TableName: table,
        Item: {
            ID: hash(),
            ...data
        }
    }

    try {
        //Set data en dynamodb
        await dynamoDb.put(params, error => {
            console.log('putting data')
            if (error) {
                console.log(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
                return Promise.reject(
                    `Error saving data to DynamoDB: ${JSON.stringify(error)}`
                )
            } else {
                console.log('data saved')
                return Promise.resolve(params.Item)
            }
        }).promise()

        res.send({
            status: 201,
            message: "ok",
            data: {
                ...data
            }
        })
    } catch (error) {
        throw new Error("data could not be saved")
    }

})

module.exports.handler = serverless(app)