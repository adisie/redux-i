import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUser } from '../features/users/userSlice'

const LogInHeader = () => {
  const user = useSelector(getUser)
  const navigate = useNavigate()
  // logout user
  
  return (
    <div className="user-control">
      <span>{user.username}</span>
      <button onClick={()=>{
        localStorage.removeItem('user')
        window.location.assign('/login')
      }}>logout</button>
    </div>
  )
}

export default LogInHeader
