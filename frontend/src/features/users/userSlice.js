
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'

// services
import { userService } from './userService'

const initialState = {
    user: null,
    isLoading: false,
    isSucceded: false,
    isError: false,
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
export const singupUser = createAsyncThunk('users/SignupUser',(user)=>{
    userService.signupUser(user)
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: builder =>{
        builder
           .addCase(loginUser.pending,state=>{
            state.isLoading = true
           })
           .addCase(loginUser.fulfilled,(state,action)=>{
            state.isLoading = false
            if(action.payload.user){
                console.log('Successful Login')
                state.errors = null
            }
            if(action.payload.errors){
                console.log('Login Failed')
                state.errors = action.payload.errors
            }
           })
           .addCase(loginUser.rejected,(state,action)=>{
            state.isLoading = false
           })
    }
})

export const getIsLoading = state => state.user.isLoading 
export const getErrors = state => state.user.errors

export default userSlice.reducer