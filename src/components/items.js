import React, {Component} from 'react'

class Items extends Component {
  handleChoose = () => {
    const {itemsArray} = this.props;
    let newItem = {
      name: itemsArray.name,
      image: itemsArray.image,
      price: itemsArray.price,
      convenience: itemsArray.convenience,
      happiness: itemsArray.happiness
    }

    this.props.chooseFn(newItem);
  }

  render(){
    return (
      <div onClick={this.handleChoose}>
        <img src={this.props.itemsArray.image} alt={this.props.itemsArray.name}/>
        <p>{this.props.itemsArray.name}</p>
        <p>${this.props.itemsArray.price}</p>
        <p>{this.props.itemsArray.convenience} Convenience</p>
        <p>{this.props.itemsArray.happiness} Happiness</p>
      </div>
    )
  }
}

export default Items