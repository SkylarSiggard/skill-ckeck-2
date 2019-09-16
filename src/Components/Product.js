import React from 'react';


class Cart extends React.Component {
  state = {
    // picture: products.img_url,
    // name: products.name_item,
    // price: products.price_item
  }
  handleEdit = () => {
    this.setState({
      edit: false
    })
    this.state.handleEdit(this.state.item_id, this.state.input)
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
        <div>
            Product
        </div>
    );
  }
}
export default Cart