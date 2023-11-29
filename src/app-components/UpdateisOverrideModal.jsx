import { UpdateOverrideForm } from "../ui-components"
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const UpdateisOverrideModal = (props) => {

      const {id, onClose, open} = props

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