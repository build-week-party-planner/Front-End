import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

const ToDoItem = props => {

  const { item } = props;

  let initialState = item.completed
  
  const updateCompleted = () => {
    initialState = !initialState
    item.completed = initialState
    console.log(item.completed)
  }

  return (
    <div>
        {item.completed ? <h3 style = {{textDecorationLine: 'line-through'}}>{item.name}</h3> : <h3>{item.name}</h3>}
        <Checkbox label="Completed" onClick = {updateCompleted}/>
    </div>
  );
};

export default ToDoItem;
