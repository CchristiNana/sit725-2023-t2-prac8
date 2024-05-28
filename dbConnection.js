const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser:dbUserPassword@cluster0.9jj8m0t.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB: ' + err.message);
        process.exit(1);
    } else {
        console.log('Connected to MongoDB');
    }
});

module.exports = client;