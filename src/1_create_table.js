const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
    TableName: 'roster',
    KeySchema: [
        {
            AttributeName: 'user_id',
            KeyType: 'HASH' // partition key
        },
        {
            AttributeName: 'role#district_id#school_id#classroom_id',
            KeyType: 'RANGE' // sort key
        }
    ],
    AttributeDefinitions: [
        {
            AttributeName: 'user_id',
            AttributeType: 'S'
        },
        {
            AttributeName: 'role#district_id#school_id#classroom_id',
            AttributeType: 'S'
        }
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    },
    StreamSpecification: {
        StreamEnabled: false
    }
};

ddb.createTable(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data);
});
