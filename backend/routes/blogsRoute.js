const {Router} = require('express')
const router = Router()

// middleware 
const protect = require('../middlewares/authMidleware')

// contrrollers
const {
    getAllBlogs,
    addNewBlog,
    updateBlog,
    deleteBlog,
} = require('../controllers/blogsController')

router.route('/').get(protect,getAllBlogs).post(protect,addNewBlog)

router.route('/:_id').put(protect,updateBlog).delete(protect,deleteBlog)


module.exports = router