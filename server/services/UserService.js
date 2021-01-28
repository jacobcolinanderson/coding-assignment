const userRepository = require('../repositories/UserRepository');
const relationshipRepository = require('../repositories/RelationshipRepository');

const UserService = () => {

    const getAll = async (page, limit) => {

        if(!page)
            page = 0;
        if(!limit)
            limit = 100;
        let offset = page * limit;

        const users = userRepository().getAll(offset, limit);
        return users
    }

    const getRelated = async (id) => {

        return new Promise((resolve, reject) =>{
            const relationships = relationshipRepository().getManyBy(id)
            relationships.then((result) =>{
                return result.map(a => a.secondary_user_id);
            })
            .then((relationshipIds) => {
                return relationshipIds.join();
            })
            .then((idString) =>{
                resolve(userRepository().getManyBy(idString))
            })
            .catch((error) =>{
                reject(error)
            })
        })
    }

    return{
        getAll,
        getRelated
    }
}
module.exports = UserService
