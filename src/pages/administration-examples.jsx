import { useParams } from 'react-router-dom'
import ContactCenterUI from '../ui-components/ContactCenterUI'
import { ContactCenterModel } from '../models'
import { useDataStoreBinding } from '../ui-components/utils'
import { Flex, Loader } from '@aws-amplify/ui-react'
import ErrorPage from '../app-components/ErrorPage'

const Administration = (props) => {
    let parms = useParams()

    const { isLoading, item } = useDataStoreBinding({
        type: 'record',
        model: ContactCenterModel,
        id: parms.ccid,
    })

    return (
        <>
            {isLoading ? (
                <Flex justifyContent="center" padding="20%">
                    <Loader height="20%" width="20%" />
                </Flex>
            ) : item ? (
                <Flex justifyContent="center">
                    <ContactCenterUI contactcentermodel={item} />
                </Flex>
            ) : <ErrorPage />}
        </>
    )
}
export default Administration
