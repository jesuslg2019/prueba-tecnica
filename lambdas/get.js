const serverless = require('serverless-http')
const express = require('express')
// const axios = require('axios')
const app = express()
// const AWS = require('aws-sdk')
// AWS.config.update({ region: 'us-east-1' })
// const dynamoDb = new AWS.DynamoDB.DocumentClient()
const { main } = require('../services/swapi')

app.get('/', async (req, res) => {
  const { service, number } = req.query
  try {
    const result = await main(service, number)
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

