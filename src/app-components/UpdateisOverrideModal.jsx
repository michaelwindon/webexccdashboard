import { UpdateOverrideForm } from '../ui-components/'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

const UpdateisOverrideModal = (props) => {
    const { id, onClose, open, user } = props

    return (
        <Dialog open={open}>
            <DialogTitle>Enable/Disable Contact Center Override</DialogTitle>
            <DialogContent>
                <UpdateOverrideForm
                    id={id}
                    onSuccess={() => {
                        onClose()
                    }}
                    onCancel={() => {
                        onClose()
                    }}
                    overrides={{ isoverride: { label: 'Override' } }}
                    onSubmit={(fields) => {
                        // TODO: ADD changes to a change dbstore to track how did what
                        // Example function to trim all string inputs
                        const updatedFields = {}
                        Object.keys(fields).forEach((key) => {
                            if (key === 'holidayField') {
                                const inputString = fields[key]
                                const outputArray = inputString.map(date => date.replace(/-/g, '/'));
                                console.log(outputArray)
                            } else {
                                updatedFields[key] = fields[key]
                            }
                        })
                        updatedFields['updateduser'] = user.username // add username to contact center to know who last updated the record

                        return updatedFields
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}
export default UpdateisOverrideModal
