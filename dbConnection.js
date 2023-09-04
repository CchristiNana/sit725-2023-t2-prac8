const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.pwqw4ja.mongodb.net/?retryWrites=true&w=majority";

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
