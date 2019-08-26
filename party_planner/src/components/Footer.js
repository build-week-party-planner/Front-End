import React from 'react'
import { Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'; 

const Footer = () => {
  return(
    <Segment.Group>
      <Segment.Group horizontal>
        <Segment><a>Contact Us</a></Segment>
        <Segment><a>Support</a></Segment>
        <Segment><a>Privacy Policy</a></Segment>
      </Segment.Group>
      <Segment.Group horizontal>
        <Segment>2019 Party Planner</Segment>
        <Segment><a>Terms And Conditions</a></Segment>
      </Segment.Group>
    </Segment.Group>

  )
} 

export default Footer