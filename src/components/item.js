import React, { Component } from 'react'

class Item extends Component {
  constructor() {
    super()
    this.state = {
    }
    this.handleChoose = this.handleChoose.bind(this)
  }


  handleChoose() {
    this.props.choose(this.props.data.id)
    this.setState({
      
    })
  }

  render() {
    return (
      <div className="item">
        <img src={this.props.data.image} alt={this.props.data.name} />
        <p>{this.props.data.name}</p>
        <p>${this.props.data.price}</p>
        {this.state.quantity ? (
          <button onClick={this.handleAddToCart}>Add To Cart</button>
        ) : null}
      </div>
    )
  }
}
export default Item