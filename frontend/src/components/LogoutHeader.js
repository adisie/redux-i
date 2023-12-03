import {NavLink} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { reset } from '../features/users/userSlice'

const LogoutHeader = () => {
  const dispatch = useDispatch()
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/login' className='link-btn' onClick={()=>dispatch(reset())}>Login</NavLink>
            </li>
            <li>
                <NavLink to='/signup' className='link-btn' onClick={()=>dispatch(reset())}>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default LogoutHeader
