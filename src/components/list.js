import React from 'react'
import ListItem from './listItem.js'

const List = (props) => {
  return (
    <div className="chosen-box">
      <div className="list">
        <h2>City Services</h2>
        {props.list.listItems.map((element) => (
          <ListItem
            cancel={props.cancel}
            key={element.list_id}
            data={element}
          />
        ))}
      </div>
      <div className="total">
        Remaining Funds: ${1000 - props.list.total}
        <button onClick={props.clear}>Clear</button>
      </div>
    </div>
  )
}
export default List