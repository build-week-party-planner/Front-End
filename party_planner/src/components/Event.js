import React, { useEffect, useRef } from 'react'
import {TimelineMax, Bounce, Elastic, Back, Power4} from 'gsap';

//routing
import { Link } from 'react-router-dom'

//styles

//redux
import { getEvents } from '../actions/index'
import { connect } from 'react-redux'

import { deleteEvent } from '../actions/eventActions';

import { Button, Icon } from 'semantic-ui-react';

import ShoppingList from './Lists/ShoppingList'
import TodoList from './Lists/ToDo'
import EntertainmentList from './Lists/Entertainment'
import FormikUpdateEvents from './UpdateEventForm';
import ProgressBar from './ProgressBar'

const SingleEvent = props => {


  let targetEvent = props.events.filter(event => {
    if (event.id.toString() === props.match.params.id) {
      return event
    }
  })

  const targetObject = { ...targetEvent[0] }

  useEffect(() => {
    props.getEvents()
  }, [])

  // ! refs for animation
  let eventHeader = useRef(null)
  let eventInfoContainer = useRef(null)
  let listBtnContainer = useRef(null)
  let shoppingBtn = useRef(null)
  let toDoBtn = useRef(null)
  let entertainmentBtn = useRef(null)
  let backIcon = useRef(null)
  let updateBtn = useRef(null)
  let listHeader = useRef(null)

  const clearStage = () => {
    const clearTl = new TimelineMax()
    
      clearTl
        .set(eventHeader, {autoAlpha: 0, y: -250})
        .set(eventInfoContainer, {autoAlpha: 0})
        .set(backIcon, {autoAlpha: 0, x:-30, y: -30})
        .set(updateBtn, {autoAlpha: 0})
        .set(listBtnContainer, {autoAlpha: 0})
        .set(shoppingBtn, {autoAlpha: 0})
        .set(toDoBtn, {autoAlpha: 0})
        .set(entertainmentBtn, {autoAlpha: 0})
        .set(listHeader, {autoAlpha: 0, onComplete: displayItems})
      ;

      function displayItems(){
        eventHeader.classList.remove('hide')
        eventInfoContainer.classList.remove('hide')
        backIcon.classList.remove('hide')
        updateBtn.classList.remove('hide')
        listBtnContainer.classList.remove('hide')
        shoppingBtn.classList.remove('hide')
        toDoBtn.classList.remove('hide')
        entertainmentBtn.classList.remove('hide')
        listHeader.classList.remove('hide')
      }
    return clearTl
  }

  const enterHeader = () =>{
    const headerTl = new TimelineMax()

      headerTl
        .to(eventHeader, .8, {autoAlpha: 1, y: 0, ease: Bounce.easeInOut})
        .fromTo(backIcon, .3, {autoAlpha: 0, x: -20, y:-20, scale:0.1}, {autoAlpha: 1, x: 0, y: 0, scale: 1},'-=.1')
        .fromTo(updateBtn, .3, {autoAlpha: 0, x: 20, y:20, scale:0.1}, {autoAlpha: 1, x: 0, y: 0, scale: 1},'-=.1')

    return headerTl
  } 

  const enterEventInfoContainer = () => {
    const infoTl = new TimelineMax()

      infoTl
        .fromTo(eventInfoContainer, 1.1, {autoAlpha: 0, scaleY:0.1, transformOrigin: 'bottom center'}, {autoAlpha: 1, scaleY: 1, transformOrigin:'bottom center', ease: Back.easeInOut})
        .fromTo(eventInfoContainer, .9, { autoAlpha: 0, scaleX:0.1, transformOrigin: 'bottom center'}, {autoAlpha: 1, scaleX: 1, transformOrigin: 'bottom center', ease: Back.easeInOut},'-=.9')
    return infoTl    
  }

  const enterLists = () => {
    const listTl = new TimelineMax()
      listTl
        .fromTo(listHeader, .5 , {autoAlpha: 0, scale:.1, transformOrigin: 'center center'}, {autoAlpha: 1, scale: 1, transformOrigin: 'center center',ease: Power4.easeInOut}, '-=2' )
        .fromTo(listBtnContainer, .1, { autoAlpha: 0, scaleY: 0.1, transformOrigin: 'top center'}, {autoAlpha: 1, scaleY:1, transformOrigin:'top center', ease: Bounce.easeInOut}, '-=1.2')
        .fromTo(shoppingBtn, .3,{autoAlpha:0, scale:.1, y:-20 }, {autoAlpha: 1, scale:1, y:0, ease: Power4.easeInOut},)
        .fromTo(toDoBtn, .3,{autoAlpha:0, scale:.1, y:-20 }, {autoAlpha: 1, scale:1, y:0, ease: Power4.easeInOut},)
        .fromTo(entertainmentBtn, .3,{autoAlpha:0, scale:.1, y:-20 }, {autoAlpha: 1, scale:1, y:0, ease: Power4.easeInOut},)
        return listTl
  }

  const go = () => {
    const masterTl = new TimelineMax()
      masterTl
        .add(clearStage(), 'scene-clear-stage')
        .add(enterEventInfoContainer(), 'scene-enter-info')
        .add(enterHeader(), 'scene-enter-header')
        .add(enterLists(), 'enter-lists-scene')
        ;
  }

  useEffect(()=> {
    go()
  },[])
 
  return (
    <div className='event-container'>
      <div className='event-header hide' ref={element => {eventHeader = element}}>

        <div className="headerTop">

          <Link to={`/dashboard/${localStorage.getItem('user_id')}`} className= 'back-button-link'>
            <div ref={element => {backIcon = element}} className = 'hide'>
              <Icon name='angle left' />
              </div>
          </Link>

          <h2>{targetObject.name}</h2>
          <div ref={element => {updateBtn = element}} className = 'hide'>
            <FormikUpdateEvents targetObject={targetObject} 
              deleteEvent={props.deleteEvent} 
              history={props.history} 
              match={props.match}
               />
             </div>
        </div>
      </div>
      <div className='event-info-container hide' ref={element => {eventInfoContainer = element}}>
        <div className='event-info'>
          <p>Theme:</p>
          <p>{targetObject.theme}</p>
        </div>
        <div className='event-info'>
          <p>Date:</p>
          <p>{targetObject.date}</p>
        </div>
        <div className='event-info'>
          <p>Guests:</p>
          <p>{targetObject.guests}</p>
        </div>
        <div className='event-info'>
          <p>Budget:</p>
          <p>${targetObject.budget}</p>
        </div>
        <ProgressBar party = {targetObject}/>
      </div>
      <div className='lists-container'>
        <h3 ref ={element => {listHeader = element}} className='hide'>Lists :</h3>
        <div className='btn-list-container hide' ref ={element => {listBtnContainer = element}}>
          <div ref ={element => {shoppingBtn = element}}>
            <ShoppingList match={props.match} />
          </div>
          <div ref ={element => {toDoBtn = element}} className='hide'>
            <TodoList match={props.match} />
          </div>
          <div className = 'hide' ref ={element => {entertainmentBtn = element}}>
            <EntertainmentList match={props.match} />
          </div>
        </div>
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    events: state.events
  }
}

export default connect(mapStateToProps, { getEvents, deleteEvent })(SingleEvent)
