import { Flex, Text, View } from '@aws-amplify/ui-react'

const ErrorPage = () => {
    return (
        <>
            <Flex padding="20%">
                <Text fontSize="10em">💣</Text>
                <Text fontSize="4em">
                    Error 404 - The page you are attempting to access does not
                    exist. Please check your link and try again.
                </Text>
            </Flex>
        </>
    )
}
export default ErrorPage
