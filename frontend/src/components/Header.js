import {NavLink} from 'react-router-dom'

import LogInHeader from './LogInHeader'
import LogoutHeader from './LogoutHeader'

const Header = () => {
  return (
    <header className='sub-con'>
        <NavLink className='site-logo' to='/'>Dashboard</NavLink>
        {
            false ? <LogInHeader /> : <LogoutHeader />
        }
    </header>
  )
}

export default Header
