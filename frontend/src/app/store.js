import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/users/userSlice'
import blogReducer from '../features/blogs/blogSlice'

export const store = configureStore({
    reducer: {
        user: userReducer,
        blogs: blogReducer,
    }
})