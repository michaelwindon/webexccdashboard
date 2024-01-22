import { SelectField, Flex, View, Tabs } from '@aws-amplify/ui-react'
import {
    CreateContactCenterTitleDetails,
    GroupModelCreateForm,
    ManagerModelCreateForm,
    QueueModelCreateForm,
} from '../ui-components'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import SyncQueues from './SyncQueues'

const Administration = () => {
    const handleonError = () => {
        showToastMessage(`Error Saving!`, 'error')
    }

    const handleonSuccess = () => {
        showToastMessage(`Saved Sucessfully!`, 'success')
    }

    const showToastMessage = (msg, status) => {
        switch (status) {
            case 'success':
                toast.success(msg)
                break

            case 'error':
                toast.error(msg)
                break

            default:
                break
        }
    }

    return (
        <>
            <h1>Administration</h1>
            <Tabs
                justifyContent="flex-start"
                defaultValue="Create Contact Center"
                items={[
                    {
                        label: 'Create Contact Center',
                        value: 'Create Contact Center',
                        content: (
                            <CreateContactCenterTitleDetails
                                onError={handleonError}
                                onSuccess={handleonSuccess}
                            />
                        ),
                    },
                    {
                        label: 'Create Groups',
                        value: 'Create Groups',
                        content: (
                            <GroupModelCreateForm
                                onError={handleonError}
                                onSuccess={handleonSuccess}
                            />
                        ),
                    },
                    {
                        label: 'Create Managers',
                        value: 'Create Managers',
                        content: (
                            <ManagerModelCreateForm
                                onError={handleonError}
                                onSuccess={handleonSuccess}
                            />
                        ),
                    },
                    {
                        label: 'Create Queues',
                        value: 'Create Queues',
                        content: (
                            <QueueModelCreateForm
                                onError={handleonError}
                                onSuccess={handleonSuccess}
                            />
                        ),
                    },
                    {
                        label: 'Sync Queues from Webex',
                        value: 'Sync',
                        content: <SyncQueues />,
                    },
                ]}
            />
        </>
    )
}
export default Administration
