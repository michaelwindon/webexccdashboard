import { Flex, Text, View } from '@aws-amplify/ui-react'
import { useLocation } from 'react-router-dom'

const PermissionDenied = (path) => {
    const location = useLocation()
    const fullURL = `${location.pathname}${location.search}${location.hash}`

    return (
        <>
            <Flex padding="10%">
                <Text fontSize="10em"> 🙅🏾‍♂️</Text>
                <Text fontSize="4em">
                    Permission Denied - You are attempting to access a page you
                    dont have permissions to access. Please contact your
                    administrator for assitance. Refer to Link: {fullURL}
                </Text>
            </Flex>
        </>
    )
}
export default PermissionDenied
