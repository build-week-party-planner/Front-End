import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

const ShoppingItem = props => {
  const { item } = props;

  let initialState = item.purchased
  
  const updateCompleted = () => {
    initialState = !initialState
    item.purchased = initialState
  }
  return (
    <div>
        {item.purchased ? <p style = {{textDecorationLine: 'line-through'}}>{item.name}</p>: <p>{item.name}</p>}
        <p>Cost: ${item.price}</p>
        <Checkbox label="Purchased" onClick = {updateCompleted}/>
    </div>
  );
};
export default ShoppingItem;
