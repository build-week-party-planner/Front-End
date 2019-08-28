import React, { useState } from 'react';

import { Button, Confirm } from 'semantic-ui-react';

const ConfirmDelete = ({ deleteEvent, targetObject, history }) => {

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleConfirmOpen = () => {
    setConfirmOpen(true);
  }

  const handleConfirmClose = () => {
    setConfirmOpen(false);
  }

  return (
    <>
      <div>
        <Button onClick={handleConfirmOpen} color="red" >Delete</Button>
        <Confirm
          content="Are you sure you want to delete this event?"
          confirmButton={<Button style={{backgroundColor: 'rgb(208, 17, 31)'}}>Delete</Button>}
          open={confirmOpen}
          onCancel={handleConfirmClose}
          onConfirm={() => deleteEvent(targetObject, history)} color="red" style={{width: 'max-content'}}
        />
      </div>
    </>
  )
}

export default ConfirmDelete