var AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1',
    endpoint: 'http://localhost:8000'
});

var ddb = new AWS.DynamoDB({ apiVersion: '2012-08-10' });

var params = { TableName: 'roster' };

ddb.deleteTable(params, function(err, data) {
    if (err) {
        switch (err.code) {
            case 'ResourceNotFoundException':
                console.error('error: table not found');
                break;
            case 'ResourceInUseException':
                console.error('error: table in use');
                break;
            default:
                throw err;
        }
    }
    console.log(data);
});
