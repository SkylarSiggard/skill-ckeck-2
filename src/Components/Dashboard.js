import React from 'react';
import axios from 'axios'
import Product from './Product'
import { async } from 'q';


class Dashboard extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      products: [],
      edit: false,
      picture: '',
      name: '',
      price: ''
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
  handleSubmit = async (item_id) => {
    // console.log('i am here',item_id, this.state.picture, this.state.name, this.state.price)
    axios.put(`/api/inventory/${item_id}`, {img_url: this.state.picture, name_item: this.state.name, price_item: this.state.price })
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
                    <button onClick={() => this.handleSubmit(products.item_id)}>Submit</button>
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

