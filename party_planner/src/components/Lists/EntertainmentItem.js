import React, { useEffect, useState } from "react";
import { Checkbox, Icon} from "semantic-ui-react";
import { connect } from 'react-redux'
import { deleteEntertainmentItem } from '../../actions'

const EntertainmentItem = props => {
  const { item } = props;

  return (
    <div>
        <p>{item.name}</p>
        <p>Cost: ${item.price}</p>
        <Icon name = 'trash alternate' onClick = {() => props.deleteEntertainmentItem(item.id)}/>
    </div>
  );
};

const mapStateToProps = state =>{
  return state
}
export default connect(mapStateToProps, {deleteEntertainmentItem})(EntertainmentItem)