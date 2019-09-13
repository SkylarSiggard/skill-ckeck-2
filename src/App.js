import React from 'react';
import './App.css';
import Header from './Components/Header'
import Form from './Components/Form'
import Dashboard from './Components/Dashboard';



function App() {
    return (
        <div className="App">
          <div>
            <Header/>
          </div>
            <div className='body'>
              <Dashboard/>
              <Form/>
            </div>
        </div>
    );
}
export default App


