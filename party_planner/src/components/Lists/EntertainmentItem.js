import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

const EntertainmentItem = props => {
  const { item } = props;
  let initialState = item.completed
  const updateCompleted = () => {
    initialState = !initialState
    item.completed = initialState
  }
  return (
    <div>
        {item.completed ? <p style = {{textDecorationLine: 'line-through'}}>{item.name}</p>: <p>{item.name}</p>}
        <p>Cost: ${item.price}</p>
        <Checkbox label="Completed" onClick = {updateCompleted}/>
    </div>
  );
};
export default EntertainmentItem;
