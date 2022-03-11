const AWS = require('aws-sdk');
const sqs = new AWS.SQS({
  endpoint: process.env.AWS_ENDPOINT
});

const handler = async () => {
  while (true) {
    try {
      // Receive message from queue
      let params = {
        QueueUrl: process.env.QUEUE_URL,
      };
      const message = await sqs.receiveMessage(params).promise()
      if (!message.Messages) continue
    
      // My logic code
    
      // Remove message from queue
      params = {
        QueueUrl: process.env.QUEUE_URL,
        ReceiptHandle: message.Messages[0].ReceiptHandle,
      };
      await sqs.deleteMessage(params).promise();
    
      console.log("Received message:", JSON.parse(message.Messages[0].Body))
    } catch (error) {
      console.log("Error: " + error)
    }
  }
}

handler();
console.log("Queues listening")