import {NavLink} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUser } from '../features/users/userSlice'

import LogInHeader from './LogInHeader'
import LogoutHeader from './LogoutHeader'

const Header = () => {
  const user = useSelector(getUser)
  return (
    <header className='sub-con'>
        <NavLink className='site-logo' to='/'>Blogs</NavLink>
        {
            user ? <LogInHeader /> : <LogoutHeader />
        }
    </header>
  )
}

export default Header
