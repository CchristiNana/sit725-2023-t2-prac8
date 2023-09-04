let collection = require('../models/cat');

const postCat = (req, res) => {
    let cat = req.body;
    collection.postCat(cat, (err, result) => {
        if (!err) {
            res.json({ statusCode: 201, data: result, message: 'success' });
        }
    });
}

const getAllCats = (req, res) => {
    collection.getAllCats((err, result) => {
        if (!err) {
            res.json({ statusCode: 200, data: result, message: 'success' });
        }
    });
}

const { ObjectId } = require('mongodb'); // Import ObjectId

const deleteCat = (req, res) => {
    const id = req.params.id;
    console.log(`Attempting to delete cat with ID: ${id}`);
    
    collection.deleteOne({ _id: ObjectId(id) }, (err, result) => {
        if (err) {
            console.error(`Error occurred: ${err}`);
            res.status(500).json({ message: 'Internal Server Error' });
        } else if (result.deletedCount === 0) {
            console.log(`Cat with ID: ${id} not found`);
            res.status(404).json({ message: 'Cat not found' });
        } else {
            console.log(`Successfully deleted cat with ID: ${id}`);
            res.status(200).json({ message: 'Cat deleted successfully' });
        }
    });
};

module.exports = { postCat, getAllCats, deleteCat}



