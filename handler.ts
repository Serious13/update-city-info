import { Context, APIGatewayProxyResult, APIGatewayEvent } from 'aws-lambda';
import serverless from 'serverless-http'
import express from 'express'
import bodyParser from 'body-parser'



export const handler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);
    const app = express()
    
    
    app.use(express.urlencoded({extended : true}))
    app.use(bodyParser.json())

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'hello world',
        }),
    };
};


/*
const express = require('express');

const app = express();


const handler = serverless(app, { provider: 'azure' });
module.exports.funcName = async (context, req) => {
  context.res = await handler(context, req);
}
*/

/**
 * aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: eu-central-1
 */

          /**permissions:
  id-token: write
  contents: read */