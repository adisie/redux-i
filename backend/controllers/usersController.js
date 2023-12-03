const bcrypt = require('bcryptjs')

// models
const User = require('../models/userModel')

// utils
const {
    MAX_AGE,
    generateToken,
    errorHandler,
} = require('../utils/userUtils')

// signup user
const signupUser = async (req,res) => {
    try{
        const {username,password} = req.body 
        const user = await User.create({username,password})
        // generate token
        const token = generateToken(user._id)
        // set cookie
        res.cookie('auth',token,{
            maxAge: MAX_AGE * 1000,
            httpOnly: true,
            sameSite: 'lax',
            secure: process.env.NODE_ENV === 'production',
        })
        res.status(200).json({
            user: {
                _id: user._id,
                username: user.username,
            }
        })
    }catch(err){
        const errors = errorHandler(err)
        res.status(400).json({
            errors
        })
    }
}

// loginuser
const loginUser = async (req,res) => {
    try{
        const {username,password} = req.body 
        const user = await User.findOne({username})
        if(user){
            const isPassMatch = bcrypt.compareSync(password,user.password)
            if(isPassMatch){
                // generate token
                const token = generateToken(user._id)
                // set cookie
                res.cookie('auth',token,{
                    maxAge: MAX_AGE * 1000,
                    httpOnly: true,
                    sameSite: 'lax',
                    secure: process.env.NODE_ENV === 'production',
                })
                res.status(200).json({
                    user: {
                        _id: user._id,
                        username: user.username,
                    }
                })
                return
            }
            throw new Error('incorrect password')
        }
        throw new Error('username not exist')
    }catch(err){
        const errors = errorHandler(err)
        res.status(400).json({errors})
    }
}

// logout user
const logoutUser = (req,res) => {
    res.status(200).json({
        message: "LOGOUT"
    })
}


module.exports = {
    signupUser,
    loginUser,
    logoutUser,
}