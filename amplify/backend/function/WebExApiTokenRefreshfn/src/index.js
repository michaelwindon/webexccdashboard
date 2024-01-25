/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	CLIENT_ID
	CLIENT_SECRET
	ACCESS_TOKEN
	REFRESH_TOKEN
	AUTHURL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const axios = require('axios')
const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET

const DataStore = require('@aws-amplify/datastore')

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`)
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
