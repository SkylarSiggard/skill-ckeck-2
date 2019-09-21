import React from 'react';
import axios from 'axios'
import Product from './Product'


class Dashboard extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      products: [],
      edit: false,
      input: this.props.text
    }
  }

  async componentDidMount() {
    const list = await axios.get('/api/inventory')
      console.log(list)
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
                    <input onChange={(e) => this.handleChange1(e)} value={products.img_url} type="text" />
                    <input onChange={(el) => this.handleChange2(el)} value={products.name_item} type="text" />
                    <input onChange={(element) => this.handleChange3(element)} value={products.price_item} type="text" />
                    <button onClick={() => this.handleEdit(products.item_id)}>Submit</button>
                    </div>}
                      <button onClick={this.toggleEdit}>Edit</button>
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

