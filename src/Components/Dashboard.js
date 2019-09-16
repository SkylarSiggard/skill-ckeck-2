import React from 'react';
import axios from 'axios'
import Product from './Product'

const apiUrl = '/api/inventory'

class Dashboard extends React.Component {
  state = {
    products: [],
    edit: false,
    input: this.props.text
  }
  componentDidMount() {
    axios.get(apiUrl).then((products) => {
        this.setState({products: products.data})
      })
  }
  handleDelete = (item_id) => {
    axios.delete(`/api/inventory/${item_id}`).then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  handleEdit = (item_id) => {
    axios.put(`/api/inventory/${item_id}`, {img_url: this.state.picture, name_item: this.state.name, price_item: this.state.price }).then(result => {
      this.setState({
        edit: false
      })
    })
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }
  handleChange1 = (e) => {
    this.setState({
      picture: e.target.value
    })
  }
  handleChange2 = (el) => {
    this.setState({
      name: el.target.value
    })
  }
  handleChange3 = (element) => {
    this.setState({
      price: element.target.value
    })
  }

  render() {
    return (
        <div className='list'>
          <Product/>
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
                      {!this.state.edit ? <>{this.props.text}</> :
                    <div>
                    <input onChange={(e) => this.handleChange1(e)} value={this.state.products.img_url} type="text" />
                    <input onChange={(el) => this.handleChange2(el)} value={this.state.products.name_item} type="text" />
                    <input onChange={(element) => this.handleChange3(element)} value={this.state.products.price_item} type="text" />
                    <button onClick={this.handleEdit}>Submit</button>
                    </div>}
                      <button onClick={this.toggleEdit}>Edit</button>
                      <button onClick={() => this.handleDelete(this.item_id)}>Delete</button>
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

