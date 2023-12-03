
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import axios from 'axios'
import {store} from './app/store'
import App from './App'

axios.defaults.baseURL = "http://localhost:3080"
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
   <Provider store={store}>
       <BrowserRouter>
         <App />
      </BrowserRouter>
   </Provider>
)