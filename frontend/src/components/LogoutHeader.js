import {NavLink} from 'react-router-dom'

const LogoutHeader = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to='/login' className='link-btn'>Login</NavLink>
            </li>
            <li>
                <NavLink to='/signup' className='link-btn'>Signup</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default LogoutHeader
