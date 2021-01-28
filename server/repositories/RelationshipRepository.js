const Pool  = require('pg').Pool

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const RelationshipRepository = () =>{

    const getManyBy = (userIds) => {
        return new Promise((resolve, reject) =>{
            db.query(`select secondary_user_id from relationship where primary_user_id = ${userIds}`, (error,results) =>{
                if(error){
                    return reject(error);
                }
                return resolve(results.rows)
            })
        })
    }

    return{
        getManyBy
    }
}


module.exports = RelationshipRepository