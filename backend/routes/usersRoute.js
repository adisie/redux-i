const {Router} = require('express')
const router = Router()

// controllers
const {
   signupUser,
   loginUser,
   logoutUser, 
} = require('../controllers/usersController')

// signup user
router.post('/signup',signupUser)

// login user
router.post('/login',loginUser)

// logout user
router.get('/logout',logoutUser)


module.exports = router