import React from 'react';
import Product from './Product'
const apiUrl = '/api/shelfie/'

class Form extends React.Component {
    state = {
        picture: '',
        name: '',
        price: null
      }
    //   handleChange = (e) => {
    //     this.setState({
    //       img: 
    //     })
    //   }



      render() {
    return (
      
        <div className='cart'>
                 items thing
            <div>
                {/* <img src={picture.img_url} alt={name.name_item}/> */}
            </div>
            <div>
                <input value={this.state.text} onChange={(e) => this.handleChange(e)} type="text" name="" id=""/>
            </div>
            <div>
                <input value={this.state.text} type="text" name="" id=""/>
            </div>
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


