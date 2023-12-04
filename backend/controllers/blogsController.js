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
                    author: 1,
                    createdAt: 1,
                    username: {
                        $arrayElemAt: ["$username.username",0]
                    }
                }
            },
            {
                $sort: {
                    createdAt: -1
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
    try{
        const {_id} = req.params 
        const blog = await Blog.findById(_id)
        if(!blog){
            return res.status(402).json({
                error: 'blog not found error'
            })
        }
        if(blog.author.toString() !== req.user._id.toString()){
            return res.status(401).json({
                error: 'can\'t update others blog'
            })
        }
        const {body} = req.body
        const updatedBlog = await Blog.findOneAndUpdate({_id},{body},{new: true})
        res.status(200).json({updatedBlog})
    }catch(err){
        res.status(400).json({
            error: 'update blog error'
        })
    }
}

// delete blog
const deleteBlog = async (req,res) => {
    try{
        const {_id} = req.params 
        const blog = await Blog.findById(_id)
        if(!blog){
            return res.status(402).json({
                error: "blog not found error"
            })
        }
        if(blog.author.toString() !== req.user._id.toString()){
            return res.status(400).json({
                error: 'can\'t delete others blog'
            })
        }
        await Blog.findByIdAndDelete({_id})
        res.status(200).json({
            message: 'deleted successfully',
            _id
        })
    }catch(err){
        res.status(400).json({
            error: 'delete blog error'
        })
    }
}

module.exports = {
    getAllBlogs,
    addNewBlog,
    updateBlog,
    deleteBlog,
}