import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import TextField from '@mui/material/TextField'
import { Flex, View, Button } from '@aws-amplify/ui-react'
import { ContactCenterModel } from '../models'
import { DataStore } from 'aws-amplify/datastore'
import { useState } from 'react'

const UpdateWelcomeModal = (props) => {
    const { open, onClose, contactcenter, user } = props

    const [fieldValue, setfieldValue] = useState('')

    const handleFieldChange = (e) => {
        setfieldValue(e.target.value)
    }

    const handleclose = () => {
        onClose(false)
    }
    const handleSubmit = async () => {
        const orignal = await DataStore.query(
            ContactCenterModel,
            contactcenter.id
        )
        if (orignal) {
            try {
                const updateContactCenter = await DataStore.save(
                    ContactCenterModel.copyOf(orignal, (update) => {
                        update.welcomeprompt = fieldValue
                        update.updateduser = user.username
                    })
                )
            } catch (error) {
                console.error(`Error in handleSubmit: ${error}`)
            }
        }
        handleclose()
    }

    return (
        <Dialog open={open} onClose={handleclose}>
            <DialogTitle>Update Contact Center Welcome</DialogTitle>
            <DialogContent>
                <Flex>
                    <View height="15rem" width="60rem" paddingTop="1em">
                        <TextField
                            id="outlined-multiline-static"
                            label="Welcome Prompt"
                            multiline
                            rows={4}
                            onChange={handleFieldChange}
                            defaultValue={contactcenter?.welcomeprompt}
                            fullWidth={true}
                        />
                        <Flex paddingTop="2rem">
                            <Button onClick={handleclose}>Cancel</Button>
                            <Button onClick={handleSubmit} variation="primary">
                                Submit
                            </Button>
                        </Flex>
                    </View>
                </Flex>
            </DialogContent>
        </Dialog>
    )
}
export default UpdateWelcomeModal
