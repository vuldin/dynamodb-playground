const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
    TableName: 'roster'
    /*
    ExpressionAttributeValues: {
        ':s': { N: '000' }
    },
    ProjectionExpression: 'USER_ID, USER_NAME',
    FilterExpression: 'USER_ID >= :s',
    */
};

ddb.scan(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.Items);
});
