import { UpdateContactCenterTitleDetails } from '../ui-components/'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const UpdateTitleDetailsModal = (props) => {
    const { id, onClose, open, user } = props

    return (
        <Dialog onClose={onClose} open={open}>
            <DialogTitle>Update Contact Center Details</DialogTitle>
            <DialogContent>
                <UpdateContactCenterTitleDetails
                    id={id}
                    onSuccess={() => {
                        onClose()
                    }}
                    onCancel={() => {
                        onClose()
                    }}
                    onSubmit={(fields) => {
                        const updatedFields = {}
                        Object.keys(fields).forEach((key) => {
                            updatedFields[key] = fields[key]
                        })
                        updatedFields['updateduser'] = user.username // add username to contact center to know who last updated the record
                        return updatedFields
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}
export default UpdateTitleDetailsModal
