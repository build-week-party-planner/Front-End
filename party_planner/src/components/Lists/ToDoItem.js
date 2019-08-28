import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

const ToDoItem = props => {

  const { item } = props;

  const [ checked, setChecked ] = useState(false)
  
  const updateCompleted = () => {
      setChecked(!checked)
      console.log(checked)
  }

  return (
    <div>
        {checked ? <p style = {{textDecorationLine: 'line-through'}}>{item.name}</p> : <p>{item.name}</p>}
        <Checkbox label="Completed" onClick = {updateCompleted}/>
    </div>
  );
};

export default ToDoItem;
