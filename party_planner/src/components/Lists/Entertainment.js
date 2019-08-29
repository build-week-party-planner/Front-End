import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { Button, Header, Modal, Icon } from 'semantic-ui-react';
import FormikEntertainmentForm from './EntertainementForm'
import { getEventEntertainment, updateEntertainmentItems, deleteEntertainmentItem } from '../../actions'
import EntertainmentItem from './EntertainmentItem'


const EntertainmentList = props => {


    const match = props

    useEffect(() => {
        props.getEventEntertainment()
    },[])

    let entertainmentList 

    if(props.entertainment){
    entertainmentList = props.entertainment.filter(item => {
        if(item.todo_list_id.toString() === match.match.params.id){
            return item
        }
    })}

    return(
        <div>
            <Modal className='listModalContainer' trigger={<Button>Entertainment</Button>} closeIcon>
                <Modal.Content className='list-content'>
                    <Header style={{color:'rgb(16, 30, 68)', textAlign: 'center', fontSize: "1.8rem"}}>Entertainment</Header>
                    {entertainmentList.length > 0 ? 
                        entertainmentList.map( item => {
                            return(
                               <EntertainmentItem key={item.id} item = {item}/>
                            )
                        })
                        :<div style={{marginBottom: '1rem'}}>Your entertainment list is currently empty. Click below to add an item.</div>
                    }
                    <FormikEntertainmentForm match = {match}/>
                    {/*<Button onClick = { () => props.updateEntertainmentItems(entertainmentList)}>Update Entertainment</Button>*/}
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
export default connect(mapStateToProps, {getEventEntertainment, updateEntertainmentItems, deleteEntertainmentItem})(EntertainmentList)