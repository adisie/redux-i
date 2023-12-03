// models
const Blog = require('../models/blogModel')

// get all blogs
const getAllBlogs = async (req,res) => {
    try {
        const blogs = await Blog.aggregate([
            {
                $lookup: {
                    from: 'users',
                    localField: 'author',
                    foreignField: '_id',
                    as: 'username'
                }
            },
            {
                $project: {
                    body: 1,
                    createdAt: 1,
                    username: {
                        $arrayElemAt: ["$username.username",0]
                    }
                }
            }
        ])

        res.status(200).json({blogs})

    }catch(err){
        res.status(400).json({
            error: 'get all blogs error'
        })
    }
}

// add new blog
const addNewBlog = async (req,res) => {
    try{
        const {body} = req.body 
        const author = req.user._id
        const blog = await Blog.create({author,body})
        res.status(200).json({blog})
    }catch(err){
        res.status(400).json({
            error: 'add new blog error'
        })
    }
}

// update blog
const updateBlog = async (req,res) => {
    res.status(200).json({
        message: 'UPDATE blog',
    })
}

// delete blog
const deleteBlog = async (req,res) => {
    res.status(200).json({
        message: 'DELETE blog'
    })
}

module.exports = {
    getAllBlogs,
    addNewBlog,
    updateBlog,
    deleteBlog,
}