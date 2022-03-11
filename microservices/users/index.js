const express = require('express')
const app = express()
const port = 3000
const AWS = require('aws-sdk');

const sqs = new AWS.SQS({
  endpoint: process.env.AWS_ENDPOINT
});

app.get('/health', (req, res) => {
  res.send('OK')
})

app.get('/', async (req, res) => {
  try {
    var params = {
      MessageBody: JSON.stringify({email: "jesusmonda", "content": "Esto es un mail de prueba"}),
      QueueUrl: process.env.QUEUE_URL,
      MessageDeduplicationId: toString(Math.random()),
      MessageGroupId: 'sendEmail',
    };
    await sqs.sendMessage(params).promise();

    res.send("OK");
  } catch (error) {
    res.send("Error" + error)
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})