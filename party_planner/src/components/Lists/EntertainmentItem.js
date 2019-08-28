import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";

const EntertainmentItem = props => {
  const { item } = props;
  const [ checked, setChecked ] = useState(false)
  const updateCompleted = () => {
      setChecked(!checked)
  }
  return (
    <div>
        {checked ? <p style = {{textDecorationLine: 'line-through'}}>{item.name}</p>: <p>{item.name}</p>}
        <p>Cost: ${item.price}</p>
        <Checkbox label="Completed" onClick = {updateCompleted}/>
    </div>
  );
};
export default EntertainmentItem;
