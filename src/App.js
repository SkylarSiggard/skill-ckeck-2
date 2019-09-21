import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Routes from './routes'


function App() {
    return (
        <div className="App">
           <div className="header">
            Header
            <Link to='/'><button>Dashboard</button></Link>
            <Link to='additem'><button>Add Inventory</button></Link>
        </div>
            <div className='body'>
              {Routes}
            </div>
        </div>
    );
}
export default App


