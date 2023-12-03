import {NavLink,Navigate} from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {getIsLoading,getIsSucess,singupUser,getErrors,reset} from '../features/users/userSlice'

import Spiner from './Spiner'

const Signup = () => {
  const dispatch = useDispatch()
  const isSuccess = useSelector(getIsSucess)
  const isLoading = useSelector(getIsLoading)
  const errors = useSelector(getErrors)
  // state
  const [formField,setFormField] = useState({
    username: '',
    password: '',
    password2: ''
  })

  // fields
  const {username,password,password2} = formField

  // input chnage
  const inputChange = e => {
    const {name,value} = e.target 
    setFormField(preState=>({
      ...preState,
      [name]: value,
    }))
  }

  // signup handler
  const signupSubmitHandler = e => {
    const password2Error = document.querySelector('.error.password2')
    e.preventDefault()
    if(password !== password2){
      password2Error.textContent = 'confirm password'
    }else {
      password2Error.textContent = ''
      dispatch(singupUser({username,password}))
    }
    
  }

  if(isLoading){
    return (<Spiner />)
  }

  return (
    <>
    {
    !isSuccess 
    ?
    <div className="user-form sub-con">
      <div className="form-container">
        <form onSubmit={signupSubmitHandler}>
            <h3>Signup</h3>
            <div className="input-control">
                <input type="text" name="username" placeholder="username" required value={username} onChange={inputChange}/>
                <div className="error username">{errors  ? errors.username : ''}</div>
            </div>
            <div className="input-control">
                <input type="password" name="password" placeholder="password" required value={password} onChange={inputChange}/>
                <div className="error password">{errors ? errors.password : ''}</div>
            </div>
            <div className="input-control">
                <input type="password" name="password2" placeholder="confirm password" required value={password2} onChange={inputChange}/>
                <div className="error password2"></div>
            </div>
            <div className="btn-container">
                <button>Signup</button>
                <NavLink to='/login' className='navigate' onClick={()=>dispatch(reset())}>have account ?</NavLink>
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

export default Signup
