import React, {Component} from 'react';
import axios from 'axios';
import Items from './items';

class Display extends Component {
    constructor(props){
        super(props);
        this.state = {
            availableItems: []
        }
    }

    componentDidMount(){
        this.getItems();
    }

    getItems = () => {
        axios.get('/api/available-items')
            .then(res => {
                this.setState({availableItems: res.data});
            })
            .catch(err => console.log(err));
    }

    render(){
        console.log(this.state.availableItems)
        const mappedItems = this.state.availableItems.map((item, i) => (
            <Items
                key={i}
                item={item}
                chooseFn={this.props.chooseFn}/>
        ))
        return (
            <div className='item-display'>
                {mappedItems}
            </div>
        )
    }
}

export default Display;