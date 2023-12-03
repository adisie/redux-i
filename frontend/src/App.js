import {Routes,Route} from 'react-router-dom'
// css
import './app.css'
// pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Signup from './pages/Signup'

// private routes
import PrivateRoutes from './utils/PrivateRoutes'

// components
import Header from './components/Header'

const App = () => {
    return ( 
        <div className="container">
            <Header />
            <Routes>
                <Route element={<PrivateRoutes />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
            </Routes>
        </div>
     );
}
 
export default App;