import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import blogService from './blogService'

const initialState = {
    blogs: [],
    isLoading: false,
    error: false,
}

// get all blogs
export const getAllBlogs = createAsyncThunk('blogs/getAllBlogs',async ()=> {
    try{
        const response = await blogService.getAllBlogs()
        return response.data
    }catch(err){
        console.log(err)
        return err.response.data
    }
})

// add new blog
export const addNewBlog = createAsyncThunk('blogs/addNewBlog',async blog => {
    try{
        const response = await blogService.addNewBlog(blog)
        return response.data
    }catch(err){
        return err.response.data
    }
})


// delete blog
export const deleteBlog = createAsyncThunk('blogs/deleteBlog',async _id => {
    try{
        const response = await blogService.deleteBlog(_id)
        return response.data
    }catch(err){
        console.log(err)
        return err.response.data
    }
})

const blogSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {
        reset: state => {
            state.blogs = []
            state.isLoading = false
            state.error = false
        }
    },
    extraReducers: builder =>{
        builder
         .addCase(getAllBlogs.pending,(state)=>{
            state.isLoading = true
         })
         .addCase(getAllBlogs.fulfilled,(state,action)=>{
            state.isLoading = false
            if(action.payload.blogs){
                state.blogs = action.payload.blogs
            }
            if(action.payload.error){
                state.error = true
            }
         })
         .addCase(addNewBlog.fulfilled,(state,action)=>{
            if(action.payload.blog){
                state.blogs = [action.payload.blog,...state.blogs]
            }
         })
         .addCase(deleteBlog.fulfilled,(state,action)=>{
            if(action.payload._id){
                state.blogs = state.blogs.filter(blog=>blog._id !== action.payload._id)
            }
         })
    }
})

export const getBlogs = state => state.blogs.blogs
export const getIsLoading = state => state.blogs.isLoading
export const getError = state => state.blogs.error
export const {reset} = blogSlice.actions

export default blogSlice.reducer