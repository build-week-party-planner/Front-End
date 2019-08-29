import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Track = styled.div`
    width:60%;
    margin: 0 auto;
    margin-bottom: 15px;
    height:25px;
    background-color: #132e56;
    border-radius: 10px;
    box-shadow: inset 0 0 px #ebf1fa;
    color:#132e56
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color:#39DB80;
    border-radius: 8px;
    transition: width 0.5s ease-in-out;
`

const ProgressBar = props => {

    const { party } = props 

    const purchasedShopping = props.shoppingListItems.filter( item => item.shopping_list_id === party.id && (item.purchased === true || item.purchased === 1))
    const purchasedEntertainment = props.entertainmentList.filter( item => item.todo_list_id === party.id)

    const totalShopping = purchasedShopping.reduce((acc, item, index) => {
        acc += item.price;
        return acc
    },0)

    const totalEntertainment = purchasedEntertainment.reduce((acc, item, index) =>{
        acc += item.price;
        return acc
    },0)

    const totalSpent = totalShopping + totalEntertainment

    let currentPercent = (totalSpent / party.budget) * 100

    let remainingBudget = party.budget - totalSpent

    return(
        <div> 
        <h3>Current Budget Progress</h3>
            <Track>
                <Thumb percentage ={currentPercent}>${remainingBudget} Left</Thumb>
            </Track>
        </div>
    )
}

const mapStateToProps = ( state ) => {
    return{
        events : state.events,
        shoppingListItems : state.shoppingListItems,
        entertainmentList : state.entertainmentList
    }
}

export default connect(mapStateToProps, {})(ProgressBar)