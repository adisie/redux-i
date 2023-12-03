import {NavLink} from 'react-router-dom'

const Signup = () => {
  return (
    <div className="user-form sub-con">
      <div className="form-container">
        <form>
            <h3>Signup</h3>
            <div className="input-control">
                <input type="text" name="username" placeholder="username" required/>
                <div className="error username"></div>
            </div>
            <div className="input-control">
                <input type="password" name="password" placeholder="password" required/>
                <div className="error password"></div>
            </div>
            <div className="input-control">
                <input type="password" name="password2" placeholder="confirm password" required/>
                <div className="error password2"></div>
            </div>
            <div className="btn-container">
                <button>Signup</button>
                <NavLink to='/login' className='navigate'>have account ?</NavLink>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
