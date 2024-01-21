import './index.css'  

import ReactDOM from 'react-dom/client'
import {Toaster} from 'react-hot-toast'
import { Provider } from 'react-redux'
import {BrowswerRouter} from 'react-router-dom'

import App from './App.jsx'
import store from './Redux/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <BrowswerRouter>
    <App />  
    <Toaster/>
    </BrowswerRouter> 
    </Provider>
);
