import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import Items from './Components/Items'
import Cart from './Components/Cart'

const apiUrl = '/api/shelfie/'

class App extends React.Component {
  state = {
    inventory: []
  }


  render() {
    // let createList = this.state.inventory.map(el => {
    //   return <Items 
    //   handleDelete={this.handleDelete}
    //   handleEdit=
    // })
    return (
        <div className="App">
          <div>
            <Header/>
          </div>
            <div className='body'>
              <Items/>
              <Cart/>
            </div>
        </div>
    );
  }
}
export default App


