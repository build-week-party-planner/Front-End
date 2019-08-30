import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transcode } from 'buffer';

const Track = styled.div`
    width:60%;
    margin: 0 auto;
    margin-bottom: 15px;
    height:30px;
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

    let remainingPercent = 100 - currentPercent

    const limit = (min, currentVal, max) => {
        return Math.min(Math.max(min, currentVal), max)
    }

    return(
        <div> 
        <h3>Current Budget Progress</h3>
            <Track>
                {currentPercent < 100 ? 
                    <Thumb percentage ={limit(0,currentPercent,100)}/> 
                    : <Thumb percentage = {limit(0,currentPercent,100)} style={{backgroundColor: 'red'}}/>}
                    {currentPercent < 100 ? 
                        <p style = {{display: 'flex', justifyContent:'flex-end', transform: 'translateY(-106%)', color:'#ffffff', marginRight: '20px'}}>${remainingBudget} Remaining</p>
                        : <p style = {{display: 'flex', justifyContent:'flex-end', transform: 'translateY(-106%)', color:'#ffffff', marginRight: '20px'}}>${remainingBudget} Over Budget</p>}
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