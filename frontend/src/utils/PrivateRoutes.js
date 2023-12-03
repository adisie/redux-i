import {Navigate,Outlet} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getUser} from '../features/users/userSlice'

const PrivateRoutes = () => {
  const user = useSelector(getUser)
  return (
    <>
    {
        user ? <Outlet /> : <Navigate to='/login' />
    }
    </>
  )
}

export default PrivateRoutes
