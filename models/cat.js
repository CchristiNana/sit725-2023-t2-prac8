let client = require('../dbConnection');

let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteCat(id, callback) {
    collection.deleteOne({ _id: new ObjectId(id) }, callback);
}

module.exports = { postCat, getAllCats}
