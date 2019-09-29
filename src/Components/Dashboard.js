import React from 'react';
import axios from 'axios'
import Product from './Product'
import { async } from 'q';


class Dashboard extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      products: [],
      edit: false
    }
    console.log(this.state.products)
  }

  async componentDidMount() {
    const list = await axios.get('/api/inventory')
      this.setState({
        products: list.data
    })
  }
  handleDelete = (item_id) => {
    axios.delete(`/api/inventory/${item_id}`).then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  handleEdit = async (item_id) => {
    axios.put(`/api/inventory/${item_id}`, {img_url: this.state.products.picture, name_item: this.state.products.name, price_item: this.state.products.price })
    this.setState({
      edit: false
    })
  }

  toggleEdit = () => {
    this.setState({
      edit: !this.state.edit
    })
  }
  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value
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
                    <input onChange={(e) => this.handleChange(e, 'picture')} placeholder="url" type="text" />
                    <input onChange={(e) => this.handleChange(e, 'name')} placeholder='name' type="text" />
                    <input onChange={(e) => this.handleChange(e, 'price')} placeholder='price' type="text" />
                    <button onClick={() => this.handleEdit(products.item_id)}>Submit</button>
                    </div>}
                      <button onClick={() => this.toggleEdit()}>Edit</button>
                      <button onClick={() => this.handleDelete(products.item_id)}>Delete</button>
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

