const userService = require('../services/UserService');

const UserController = () => {

    const getAll = async (req, res) => {

        var page = req.query.page;
        var limit = req.query.limit;

        const users = userService().getAll(page, limit)
        users.then((result) => {
            console.log("called get all")
            return res.status(200).json(result)
        })
        .catch((error) =>{
            return res.status(500).json(error)
        })
    }

    const getRelated = async (req, res) => {

        var id = req.params.id;

        const users = userService().getRelated(id);
        users.then((result) => {
            console.log('called get relationships')
            return res.status(200).json(result);
        })
        .catch((error) =>{
            return res.status(500).json(error)
        })
    }

    const test = (req, res) => {
        return res.status(200).json({'test': 'test'})
    }

    return{
        getAll,
        getRelated,
        test
    }
}

module.exports = UserController;