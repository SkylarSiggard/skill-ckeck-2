import React from 'react';
import Product from './Product'
import axios from 'axios'

const apiUrl = '/api/inventory'
class Form extends React.Component {
    state = { 
        picture: 'https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg',
        name: '',
        price: ''
      }

      //need to fix this area 
      handleChange = (e) => {
        this.setState({
          picture: e.target.value
        })
      }
    
      handleSubmit = () => {
        axios.post(apiUrl, { text: this.state.input }).then(res => {
          this.setState({
            picture: res.data,
            name: '',
            price: ''
          })
        })
      }
    
      handleCancel = (id) => {
        axios.delete(`/api/inventory/${id}`).then(res => {
          this.setState({
            name: res.data
          })
        })
      }

      render() {
    return (
      
        <div className='cart'>
            <div>
                <img className='viewing'src={this.state.picture} alt=''/>
            </div>
                Image URL:
            <div>
                <input value={this.state.text} onChange={(e) => this.handleChange(e)} type="text" name="" id=""/>
            </div>
                Product Name:
            <div>
                <input value={this.state.text} type="text" name="" id=""/>
            </div>
                Price:
            <div>
                <input value={this.state.text} type="text" name="" id=""/>
            </div>
            <div>
                <button onClick={this.handleSubmit}>Add</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
            <Product/>
        </div>
    );
  }
}
export default Form


