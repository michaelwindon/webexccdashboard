import { UpdateContactCenterTitleDetails } from '../ui-components/'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { fetchUserAttributes } from 'aws-amplify/auth'

const UpdateTitleDetailsModal = (props) => {
    const { id, onClose, open, user } = props

    var userAttributes
    fetchUserAttributes()
        .then((result) => {
            userAttributes = result
            console.log(`${JSON.stringify(userAttributes)}`)
        })
        .catch((err) => {
            console.log(err)
        })

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
                        var updatedFields = {
                            ...fields,
                        }
                        updatedFields['updateduser'] = userAttributes?.email

                        console.log(`updating ${JSON.stringify(updatedFields)}`)
                        return updatedFields
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}
export default UpdateTitleDetailsModal
