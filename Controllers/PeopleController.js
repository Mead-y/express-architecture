const dbService = require('../Services/DbService')
const peopleService = require ('../Services/PeopleService')

const getPeople = async (req,res) => {
    const db = await dbService.getDb()
    const data = await peopleService.getAllPeople(db)
    res.json(data)

}

module.exports.getPeople = getPeople