const { ObjectId } = require('mongodb'); // Import ObjectId
let client = require('../dbConnection');

let collection = client.db().collection('Cats');

function postCat(cat, callback) {
    collection.insertOne(cat, callback);
}

function getAllCats(callback) {
    collection.find({}).toArray(callback);
}

function deleteCat(id, callback) {
    // console.log(id)
    const idObject = new ObjectId(id);
    // console.log("idObject");
    // console.log(idObject);
    collection.deleteOne({ _id: idObject }, callback);
}

module.exports = { postCat, getAllCats, deleteCat };