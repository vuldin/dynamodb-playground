const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

const ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

const params = {
    TableName: 'roster',
    Key: {
        user_id: { S: 'user_123' },
        'role#district_id#school_id#classroom_id': {
            S: 'role#district_234#school_345#classroom_456'
        }
    }
};

ddb.deleteItem(params, function(err, data) {
    if (err) {
        throw err;
    }
    console.log(data.Item);
});
