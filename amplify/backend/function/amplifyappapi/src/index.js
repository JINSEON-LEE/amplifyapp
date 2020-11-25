/* Amplify Params - DO NOT EDIT
	API_NOTESAPP_GRAPHQLAPIENDPOINTOUTPUT
	API_NOTESAPP_GRAPHQLAPIIDOUTPUT
	API_NOTESAPP_GRAPHQLAPIKEYOUTPUT
	API_NOTESAPP_NOTETABLE_ARN
	API_NOTESAPP_NOTETABLE_NAME
	AUTH_AMPLIFYAPP0BBFB25D_USERPOOLID
	ENV
	REGION
	STORAGE_IMAGESTORAGE_BUCKETNAME
Amplify Params - DO NOT EDIT */

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
