import React from 'react';

import axios from 'axios'

const apiUrl = '/api/inventory'
class Form extends React.Component {
    state = { 
        picture: 'https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg',
        name: '',
        price: null
      }

      //need to fix this area 
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
      handleCancel = () => {
          this.setState({
            picture: 'https://vollrath.com/ClientCss/images/VollrathImages/No_Image_Available.jpg',
            name: '',
            price: ''
            // text: ''
          })
        }
    
      handleSubmit = () => {
        axios.post(apiUrl, {img_url: this.state.picture, name_item: this.state.name, price_item: this.state.price }).then(res => {
          this.setState({
            picture: '',
            name: '',
            price: ''
            // text: ''
          })
        })
      }
    

      render() {
    return (
      
        <div className='cart'>
            <div>
                <img  className='viewing'src={this.state.picture} alt=''/>
            </div>
                Image URL:
            <div>
                <input 
                // value={this.state.text} 
                onChange={(e) => this.handleChange1(e)} type="text" name="" id=""/>
            </div>
                Product Name:
            <div>
                <input value={this.state.text} onChange={(el) => this.handleChange2(el)} type="text" name="" id=""/>
            </div>
                Price:
            <div>
                <input value={this.state.text} onChange={(element) => this.handleChange3(element)} type="text" name="" id=""/>
            </div>
            <div>
                <button onClick={this.handleSubmit}>Add Item</button>
                <button onClick={this.handleCancel}>Cancel Item</button>
            </div>
        </div>
    );
  }
}
export default Form

// data:image/jpeg;base64,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
