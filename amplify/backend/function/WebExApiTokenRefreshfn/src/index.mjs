import axios from 'axios'

export const handler = async (event, context) => {
    console.log('EVENT: \n' + JSON.stringify(event, null, 2))
    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const refreshToken = process.env.REFRESH_TOKEN
    const authUrl = process.env.AUTHURL

    const params = {
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
    }

    let urlParams = Object.entries(params)
        .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&')

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
    }

    try {
        const response = await axios.post(webexUrl, urlParams, config)
        console.log(`Storing in database: ${JSON.stringify(response.data)}`)
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error calling External API' }),
        }
    }

    return {
        statusCode: 200,
        body: { message: 'ok' },
    }
}
