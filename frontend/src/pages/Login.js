import {NavLink} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="user-form sub-con">
      <div className="form-container">
        <form>
            <h3>Login</h3>
            <div className="input-control sub-con">
                <input type="text" name="username" placeholder="username" required/>
                <div className="error username"></div>
            </div>
            <div className="input-control">
                <input type="password" name="password" placeholder="password" required/>
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

export default Signup
