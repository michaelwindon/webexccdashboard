import { UpdateOverrideForm } from "../ui-components"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';


const UpdateisOverrideModal = (props) => {

      const {id, onClose, open, override} = props

  return (
    <Dialog open={open}>
    <DialogTitle>Enable/Disable Contact Center Override</DialogTitle>
    <DialogContent>
     <UpdateOverrideForm 
        id={id}
        onSuccess={()=> {onClose()}} // TODO: ADD changes to a change dbstore to track how did what
        onCancel={() =>{onClose()}}
        overrides={{isoverride: 
                  {label: 'Override'},
                  
              }}
        />
     </DialogContent>
    </Dialog>
  )
}
export default UpdateisOverrideModal