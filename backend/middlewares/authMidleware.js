const jwt = require('jsonwebtoken')

// models
const User = require('../models/userModel')


// auth middleware
const protect = (req,res,next) =>{
    // get the token from the cookie
    const token = req.cookies.auth 
    if(token){
        jwt.verify(token,process.env.JWT_KEY,async (err,decodedToken)=>{
            if(err){
                res.status(401).json({
                    error: 'AUTH-FAILED'
                })
                return
            }
            const user = await User.findById(decodedToken._id)
            req.user = {
                _id: user._id,
                username: user.username
            }
            next()
        })
    }else{
        res.status(401).json({
            error: 'AUTH-FAILED'
        })
        return
    }  
}

module.exports = protect