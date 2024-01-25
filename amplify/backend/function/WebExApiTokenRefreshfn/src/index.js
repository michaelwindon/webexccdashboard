/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	CLIENT_ID
	CLIENT_SECRET
	ACCESS_TOKEN
	REFRESH_TOKEN
	AUTHURL
Amplify Params - DO NOT EDIT */

const Amplify = require('@aws-amplify/core')
const DataStore = require('@aws-amplify/datastore')
const { TokenModel } = require('./models')

Amplify.configure({
    DataStore: {
        authMode: process.env.APPSYNAPIKEY, // Or the appropriate authentication mode for your setup
    },
})

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const authUrl = process.env.AUTHURL

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`)

    const tokendata = await DataStore.query(TokenModel, '1')
    console.log(`TOKEN_DATA: ${JSON.stringify(tokendata)}`)

    const refreshToken = tokendata.refresh_token ?? process.env.REFRESH_TOKEN

    const getRefreshToken = async () => {
        const webexUrl = authUrl
        const params = {
            grant_type: 'refresh_token',
            client_id: clientId,
            client_secret: clientSecret,
            refresh_token: refreshToken,
        }

        console.log(`Trying request with params: ${JSON.stringify(params)}`)

        let urlParams = Object.entries(params)
            .map(
                (x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`
            )
            .join('&')

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
            },
        }

        const response = await axios.post(webexUrl, urlParams, config)

        // Store this in database..
        console.log(`Retrived Token DATA: ${JSON.stringify(response.data)}`)
        // Gives -> access_token, expires_in, refresh_token, refresh_token_expires_in, token_type

        // Returned access token
        let token_data = await response.data
        console.log(`Webex`)
    }

    return {
        statusCode: 200,
        //  Uncomment below to enable CORS requests
        //  headers: {
        //      "Access-Control-Allow-Origin": "*",
        //      "Access-Control-Allow-Headers": "*"
        //  },
        body: JSON.stringify('Hello from Lambda!'),
    }
}
