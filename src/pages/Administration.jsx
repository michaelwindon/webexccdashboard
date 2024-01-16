import { SelectField, Flex, View, Tabs } from '@aws-amplify/ui-react'
import {
    CreateContactCenterTitleDetails,
    GroupModelCreateForm,
    ManagerModelCreateForm,
    QueueModelCreateForm,
} from '../ui-components'

const Administration = () => {
    return (
        <>
            <Tabs
                justifyContent="flex-start"
                defaultValue="Create Contact Center"
                items={[
                    {
                        label: 'Create Contact Center',
                        value: 'Create Contact Center',
                        content: <CreateContactCenterTitleDetails />,
                    },
                    {
                        label: 'Create Groups',
                        value: 'Create Groups',
                        content: <GroupModelCreateForm />,
                    },
                    {
                        label: 'Create Managers',
                        value: 'Create Managers',
                        content: <ManagerModelCreateForm />,
                    },
                    {
                        label: 'Create Queues',
                        value: 'Create Queues',
                        content: <QueueModelCreateForm />,
                    },
                ]}
            />
        </>
    )
}
export default Administration
