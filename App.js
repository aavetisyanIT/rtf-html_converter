const CloudmersiveConvertApiClient = require('cloudmersive-convert-api-client');

const defaultClient = CloudmersiveConvertApiClient.ApiClient.instance;

// Configure API key authorization: Apikey

const Apikey = defaultClient.authentications['Apikey'];

Apikey.apiKey = 'YOUR API KEY';

// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

const apiInstance = new CloudmersiveConvertApiClient.ConvertDocumentApi();

// File | Input file to perform the operation on.
const inputFile = '/path/to/file';

const callback = function (error, data, response) {
	if (error) {
		console.error(error);
	} else {
		console.log('API called successfully. Returned data: ' + data);
	}
};

apiInstance.convertDocumentRtfToHtml(inputFile, callback);
