import axios from 'axios'

// login user
const loginUser = async (user) => {
    return await axios.post('/users/login',user,{withCredentials: true})
}
// signup user
const signupUser = async (user) => {
    return await axios.post('/users/signup',user,{withCredentials: true})
}

export const userService = {
    loginUser,
    signupUser,
}