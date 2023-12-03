
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// services
import { userService } from './userService'

const localUser = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: localUser ? localUser : null,
    isLoading: false,
    isSuccess: false,
    errors: null,
}
// loginuser
export const loginUser = createAsyncThunk('users/loginUser',async user=>{
    try {
        const response = await userService.loginUser(user)
        return response.data
    }catch(err){
        return err.response.data
    }
})

// signup user
export const singupUser = createAsyncThunk('users/SignupUser',async (user)=>{
    try{
        const response = await userService.signupUser(user)
        console.log(response.data)
        return response.data
    }catch(err){
        return err.response.data
    }
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        reset: (state,action) => {
            state.errors = null
        }
    },
    extraReducers: builder =>{
        builder
           .addCase(loginUser.pending,state=>{
                state.isLoading = true
           })
           .addCase(loginUser.fulfilled,(state,action)=>{
                state.isLoading = false
                if(action.payload.user){
                    state.user = action.payload.user
                    state.errors = null
                    state.isSuccess = true
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
                if(action.payload.errors){
                    state.isLoading = false
                    state.isSuccess = false
                    state.errors = action.payload.errors
                }
           })
           .addCase(singupUser.pending,state=>{
                state.isLoading = true
           })
           .addCase(singupUser.fulfilled,(state,action)=>{
                state.isLoading = false
                if(action.payload.errors){
                    state.errors = action.payload.errors
                    state.isSuccess = false
                }
                if(action.payload.user){
                    state.user = action.payload.user
                    state.errors = null
                    state.isSuccess = true
                    localStorage.setItem('user',JSON.stringify(action.payload.user))
                }
           })
    }
})

export const getIsLoading = state => state.user.isLoading 
export const getIsSucess = state => state.user.isSuccess
export const getErrors = state => state.user.errors
export const getUser = state => state.user.user

export const {reset} = userSlice.actions


export default userSlice.reducer