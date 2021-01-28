const userRoutes = {
    'GET /users' : 'UserController.getAll',
    'GET /user/:id/relationships': 'UserController.getRelated',
    'GET /test' : 'UserController.test'
}

module.exports = userRoutes