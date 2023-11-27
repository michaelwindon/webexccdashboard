import { UpdateOverrideForm } from "../ui-components"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { useState } from "react";


const UpdateisOverrideModal = (props) => {

      const {id, onClose, open} = props

  return (
    <Dialog open={open}>
    <DialogTitle>Enable Contact Center Override</DialogTitle>
    <DialogContent>
     <UpdateOverrideForm 
        id={id}
        onSubmit={(fields) => {
            const updatedFields = {}
            Object.keys(fields).forEach(key => {
                    updatedFields[key] = fields[key]
            })
            onClose()
            return updatedFields
        }}
        />
     </DialogContent>
     <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
    </DialogActions>
    </Dialog>
  )
}
export default UpdateisOverrideModal