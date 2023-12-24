import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import { Button } from '@mui/material'

const ShowSpanishModal = (props) => {
    const { open, onClose, showSpanish, handleShowSpanish } = props

    const handleclose = () => {
        onClose(false)
    }
    return (
        <Dialog
            open={open}
            onClose={handleclose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Modify English or Spanish Menu Options?
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Select a language to modify selected menu options.
                </DialogContentText>
                <DialogActions>
                    <Button
                        onClick={() => {
                            handleShowSpanish(true)
                            handleclose()
                        }}
                    >
                        Spanish
                    </Button>
                    <Button
                        onClick={() => {
                            handleShowSpanish(false)
                            handleclose()
                        }}
                        autoFocus
                    >
                        English
                    </Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}
export default ShowSpanishModal
