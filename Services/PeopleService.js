const getAllPeople = async(db) => {
    const collection = db.collection('people')
    return collection.find({}).toArray()
}

module.exports.getAllPeople = getAllPeople
