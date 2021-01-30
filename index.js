const AWS = require('aws-sdk')
AWS.config.update({ region: 'us-east-1' })
const dynamoDb = new AWS.DynamoDB.DocumentClient()

const params = { TableName: 'mydata' }

dynamoDb.scan(params, function (err, data) {
    if (err) console.log(err);
    else console.log(data)
})