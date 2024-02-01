import { DynamoDBClient,UpdateItemCommand } from '@aws-sdk/client-dynamodb'
import {
    DynamoDBDocumentClient,
    GetCommand,
    PutCommand
} from '@aws-sdk/lib-dynamodb'

const client = new DynamoDBClient({})

const dynamo = DynamoDBDocumentClient.from(client)

const tableName = 'KeyStore-evofqle4kjbshkoqv75xg6by3a-staging'

export const handler = async (event, context) => {
    let token
    console.log(`Get Token from DB`)
    
    try {
        token = await dynamo.send(
            new GetCommand({
                TableName: tableName,
                Key: { id: '1' },
            })
        )
    } catch (error) {
        console.log(`DB Error: ${JSON.stringify(error)}`)
        return {
            statusCode: 500,
            body: error.message,
            headers: { 'Content-Type': 'applications/json' },
        }
    }
    console.log(`Retrived from DB: ${JSON.stringify(token, null, 2)}`)

    const clientId = process.env.CLIENT_ID
    const clientSecret = process.env.CLIENT_SECRET
    const refreshToken = token.Item.refresh_token
    const accessToken = token.Item.access_token

    const authUrl = 'https://webexapis.com/v1/access_token'

    const params = {
        grant_type: 'refresh_token',
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
    }

    let urlParams = Object.entries(params)
        .map((x) => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`)
        .join('&')

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
        },
        body: urlParams,
    }

    console.log(`Get new Token from WebEx API`)
    let responseData
    try {
        const response = await fetch(authUrl, options)
        responseData = await response.json()

        console.log(`Response Data: ${JSON.stringify(responseData, null, 2)}`)
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(`{message: ${error.message}}`),
            headers: { 'Content-Type': 'applications/json' },
        }
    }

    console.log(`Store new token`)
    let newToken
    
    try {
        newToken = await dynamo.send(
            new PutCommand({
                TableName: tableName,
                Item: {
                    id: '1',
                    access_token: responseData.access_token,
                    expires_in: responseData.expires_in,
                    refresh_token: responseData.refresh_token,
                    refresh_token_expires_in:
                        responseData.refresh_token_expires_in,
                        _version: 1,
                        updatedAt: new Date().toISOString(),
                        createdAt : new Date().toISOString(),
                        _lastChangedAt : new Date().getTime(),
                        __typename : 'KeyStore',
                        token_type : 'Bearer',
                        org_id : '1',
                },
            })
        )
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify(`{message: ${error.message}}`),
            headers: { 'Content-Type': 'applications/json' },
        }
    }

    console.log(`New Token Stored: ${JSON.stringify(newToken, null, 2)}`)
    return {
        statusCode: 200,
        body: { message: 'successful' },
        headers: { 'Content-Type': 'applications/json' },
    }
}
