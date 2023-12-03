const jwt = require('jsonwebtoken')

// max age
const MAX_AGE = 60 * 23


// custom error handler
const errorHandler = err => {
    const errors = {username: '',password: ''}
    if(err.message === 'username not exist'){
        errors.username = 'username not exist'
    }
    if(err.message === 'incorrect password'){
        errors.password = 'incorrect password'
    }
    if(err.code === 11000){
        if(err.message.includes('username')){
            errors.username = 'username already exist'
        }
    }
    if(err.message.includes('User validation failed')){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message
        })
    }
    return errors
}

// generate token
const generateToken = _id => {
    return jwt.sign({_id},process.env.JWT_KEY,{expiresIn: MAX_AGE})
}

module.exports = {
    MAX_AGE,
    generateToken,
    errorHandler,
}