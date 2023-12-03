import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {NavLink,Navigate} from 'react-router-dom'
import { loginUser,getIsLoading,getErrors,reset,getIsSucess} from '../features/users/userSlice'

import Spiner from './Spiner'

const Login = () => {
  // slice state
  const isLoading = useSelector(getIsLoading)
  const errors = useSelector(getErrors)
  const isSuccess = useSelector(getIsSucess)
 
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
    dispatch(loginUser({username,password}))
    // setFormField({
    //   username: '',
    //   password: ''
    // })
  }
  if(isLoading){
    return <Spiner />
  }

  return (
    <>
    {
      !isSuccess 
      ?
      <div className="user-form sub-con">
        <div className="form-container">
          <form onSubmit={loginSubmit}> 
              <h3>Login</h3>
              <div className="input-control sub-con">
                  <input type="text" name="username" placeholder="username" required value={username} onChange={inputChangeHandler}/>
                  <div className="error username">{errors ? errors.username : ''}</div>
              </div>
              <div className="input-control">
                  <input type="password" name="password" placeholder="password" required value={password} onChange={inputChangeHandler}/>
                  <div className="error password">{errors ? errors.password : ''}</div>
              </div>
              <div className="btn-container">
                  <button>Login</button>
                  <NavLink to='/signup' className='navigate' onClick={()=>dispatch(reset())}>no account</NavLink>
              </div>
          </form>
        </div>
      </div>
      :
      <Navigate to='/' />
    }
    </>
  )
}

export default Login
