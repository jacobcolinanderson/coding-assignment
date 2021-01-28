const Pool  = require('pg').Pool

const db = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

const UserRepository = () => {

    const getAll = (offset, limit) => {
        return new Promise((resolve, reject) =>{
            db.query(`SELECT user_id, first_name, last_name FROM app_user offset ${offset} limit ${limit}`, (error, results) => {
                if(error)
                    return reject(error);
                
                return resolve(results.rows);
            })
        })
    }
    
    const getManyBy = (idsString) => {
        return new Promise((resolve, reject) =>{
            db.query(`SELECT user_id, first_name, last_name FROM app_user where user_id in (${idsString})`, (error,results) =>{
                if(error){
                    return reject(error)
                }
                return resolve(results.rows)
            })
        })
    }

    return{
        getAll,
        getManyBy
    }
}

module.exports = UserRepository