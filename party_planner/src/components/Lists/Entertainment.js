import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Header, Modal } from 'semantic-ui-react';
import FormikEntertainmentForm from './EntertainementForm'
import { getEventEntertainment, updateEntertainmentItems } from '../../actions'
import EntertainmentItem from './EntertainmentItem'


const EntertainmentList = props => {


    const match = props

    useEffect(() => {
        props.getEventEntertainment()
    },[])

    const entertainmentList = props.entertainment.filter(item => {
        if(item.todo_list_id.toString() === match.match.params.id){
            return item
        }
    })

    return(
        <div className = 'modal-container'>
            <Modal trigger={<Button>Entertainment</Button>} closeIcon>
                <Modal.Content>
                    <Header>Entertainment</Header>
                    {entertainmentList.length ? 
                        entertainmentList.map( item => {
                            return(
                               <EntertainmentItem item = {item}/>
                            )
                        })
                        :'Your entertainment list is currently empty. Click below to add an item.'
                    }
                    <FormikEntertainmentForm match = {match}/>
                    <Button onClick = { () => props.updateEntertainmentItems(entertainmentList)}>Update Entertainment</Button>
                    </Modal.Content>
            </Modal>
        </div>
    )
}

const mapStateToProps = state => {
    return {
       entertainment : state.entertainmentList
    }
}
export default connect(mapStateToProps, {getEventEntertainment, updateEntertainmentItems})(EntertainmentList)