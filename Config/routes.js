const peopleController = require('../Controllers/PeopleController')
const routes = app => {
    app.get('/', peopleController.getPeople)
}

module.exports = routes