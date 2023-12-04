import axios from "axios"

// check authentications
const checkAuth = async () => {
    return await axios.get('/auth-check',{withCredentials: true})
}

// get all blogs
const getAllBlogs = async () => {
    return await axios.get('/blogs',{withCredentials: true})
}

// add new blog
const addNewBlog = async blog => {
    return await axios.post('/blogs',blog,{withCredentials: true})
}

// delete blog
const deleteBlog = async _id => {
    return await axios.delete(`/blogs/${_id}`,{withCredentials: true})
}

const blogService = {
    checkAuth,
    getAllBlogs,
    addNewBlog,
    deleteBlog,
}

export default blogService