import React, { useEffect, useState } from "react";
import { Checkbox } from "semantic-ui-react";
import { connect } from 'react-redux'
import { updateShoppingItems } from '../../actions'
import { Form, Field, withFormik} from 'formik'
import * as Yup from 'yup'


const ShoppingItem = props => {
  const { item } = props;
  const { setModalPosition} = props
  const { modalPosition } = props
  const { setItemToRender } = props

  let initialState = item.purchased

  let arrItem = []
  arrItem.push(item)

  const updateCompleted = e => {
    initialState = !initialState
    item.purchased = initialState
    setItemToRender(arrItem)
    setModalPosition(2)
  }


  return (
    <div>
        {modalPosition === 1 ? 
          item.purchased ? 
            <p style = {{textDecorationLine: 'line-through'}}>{item.name}</p>
              : <p>{item.name}</p>
          : null}
        {item.price ? 
          <p>Cost: ${item.price}</p> 
          : null }
        {modalPosition === 1 ?
          <Checkbox label="Purchased" onClick = {updateCompleted}/> :
          null}
    </div>
  );
};

 const FormikShoppingItem = withFormik({
   mapPropsToValues({price}){
     return{
       price: price || ''
     }
   },
   validationSchema: Yup.object().shape({
     price: Yup.number().required('Price is required')
   }),
   handleSubmit(values, props){
      let item = props.props.item
      const valuesToSubmit = [{...props.props.item, price: values.price}]
      props.props.updateShoppingItems(valuesToSubmit)
      props.props.setModalPosition(1)
   }
 })(ShoppingItem)

 const mapStateToProps = state => {
   return state
 }

 export default connect(mapStateToProps, {updateShoppingItems})(FormikShoppingItem)