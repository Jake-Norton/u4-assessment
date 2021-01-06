import React from 'react';
import List from './List'

const listItem = props => {
  const mappedItems = props.chosenItems.map((item, i) => (
    <List
      key={i}
      item={item}
      cancelFn={props.cancelFn}/>
  ))
}
export default ListItem