import { ManagerModelUpdateForm } from '../ui-components'
import {
    useAuthenticator,
    withAuthenticator,
    Flex,
    View,
    Tabs,
} from '@aws-amplify/ui-react'

const UserProfile = () => {
    return (
        <>
            <div>UserProfile</div>
            <ManagerModelUpdateForm />
        </>
    )
}
export default withAuthenticator(UserProfile)
