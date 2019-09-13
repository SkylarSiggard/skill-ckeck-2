import React from 'react';
import axios from 'axios'

const apiUrl = '/api/shelfie/'

class Dashboard extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    axios 
      .get(apiUrl).then((products) => {
        this.setState({products: products.data})
      })
  }
  render() {
    return (
      
        <div className='list'>
            item list
            {
              this.state.products.length ? (
                this.state.products.map(products => {
                  return (
                    <div className='items'>
                      <img src={products.img_url} alt=""/>
                      <p>{products.name_item}</p>
                      <p>{products.price_item}</p>
                    </div>
                  )
                })
              ) : null
            }
            <h1>{this.state.products.length ? this.state.products[0].name : null}</h1>
        </div>
    );
  }
}
export default Dashboard

