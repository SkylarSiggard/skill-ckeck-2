import React from 'react';
import axios from 'axios'

const apiUrl = '/api/inventory'

class Dashboard extends React.Component {
  state = {
    products: []
  }
  componentDidMount() {
    axios.get(apiUrl).then((products) => {
        this.setState({products: products.data})
      })
  }
  render() {
    return (
      
        <div className='list'>
            {
              this.state.products.length ? (
                this.state.products.map(products => {
                  return (
                    <div className='items'>
                      
                    <img className='picture' src={products.img_url} alt=""/>
                      
                      <div className='info'>
                        <p>{products.name_item}</p>
                      </div>
                      <div className='info'>
                        <p>{products.price_item}</p>
                      </div>
                      <button>Delete</button>
                      <button>Edit</button>
                    </div>
                  )
                })
              ) : null
            }
            {/* <h1>{this.state.products.length ? this.state.products[0].name : null}</h1> */}
        </div>
    );
  }
}
export default Dashboard

