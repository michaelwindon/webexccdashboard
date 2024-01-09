import { Flex, Text, View } from '@aws-amplify/ui-react'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const ErrorPage = (props) => {
    const { icon, errorMsg } = props

    const [iconText, setIconText] = useState('')
    const [errorText, setErrorText] = useState('')

    const navigate = useNavigate()

    useEffect(() => {
        if (icon == undefined) {
            setIconText('💣')
        } else {
            setIconText(icon)
        }
        if (errorMsg == undefined) {
            setErrorText(
                'Error 404 - The page you are attempting to access does not exist. Please check your link and try again.'
            )
        }
    }, [icon, errorMsg])

    return (
        <>
            <Flex padding="15%">
                <Text fontSize="10em">{iconText}</Text>3
                <Flex direction="column">
                    <Text fontSize="4em">{errorText}</Text>
                    <Link to="#" onClick={() => navigate(-1)}>
                    <Text fontSize="4em"> Go Back </Text>
                </Link>
                </Flex>
            </Flex>
        </>
    )
}
export default ErrorPage
