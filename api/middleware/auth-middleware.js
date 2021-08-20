const db = require('../../data/dbConfig')


const checkUsernameExists = async(req, res, next) => {
    if(!req.body.username || !req.body.password){
        next({status: 401, message: 'username and password required'})
    }else{
       const {username} = req.body
        const result = await db('users')
            .where({username}).select('users.id', 'users.username')
        const exists = result[0]

        if(exists){
            next({status: 401, message: 'username taken'})
        }
        else{
            next()
        } 
    }

    
}
  
  

  
module.exports = {
    checkUsernameExists
}