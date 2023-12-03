import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {NavLink} from 'react-router-dom'
import { loginUser,getIsLoading,getErrors} from '../features/users/userSlice'

import Spiner from './Spiner'

const Login = () => {
  // slice state
  const isLoading = useSelector(getIsLoading)
  const errors = useSelector(getErrors)
  console.log(errors)
  // dispatch
  const dispatch = useDispatch()
  // states
  const [formField,setFormField] = useState({
    username: '',
    password: ''
  }) 
  // fields
  const {username,password} = formField
  // input change handler
  const inputChangeHandler = e => {
    const {name,value} = e.target 
    setFormField(prevState=>({
      ...prevState,
      [name]: value
    }))
  }

  // login submit
  const loginSubmit = e => {
    e.preventDefault()
    const usernameError = document.qu]]]]]]]]]]]]
    dispatch(loginUser({username,password}))
    if(errors){

    }
    setFormField({
      username: '',
      password: ''
    })
  }
  if(isLoading){
    return <Spiner />
  }
  return (
    <div className="user-form sub-con">
      <div className="form-container">
        <form onSubmit={loginSubmit}> 
            <h3>Login</h3>
            <div className="input-control sub-con">
                <input type="text" name="username" placeholder="username" required value={username} onChange={inputChangeHandler}/>
                <div className="error username"></div>
            </div>
            <div className="input-control">
                <input type="password" name="password" placeholder="password" required value={password} onChange={inputChangeHandler}/>
                <div className="error password"></div>
            </div>
            <div className="btn-container">
                <button>Login</button>
                <NavLink to='/signup' className='navigate'>no account</NavLink>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Login
