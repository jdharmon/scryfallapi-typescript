/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/mappers";
import { ScryfallClient } from "../scryfallClient";

const WebResource = msRest.WebResource;

/** Class representing a Sets. */
export class Sets {
  private readonly client: ScryfallClient;
  /**
   * Create a Sets.
   * @param {ScryfallClient} client Reference to the service client.
   */
  constructor(client: ScryfallClient) {
    this.client = client;
  }

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getAllWithHttpOperationResponse(options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'sets';

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.SetList;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @param {string} code
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse} - The deserialized result object.
   *
   * @reject {Error|ServiceError} - The error object.
   */
  async getByCodeWithHttpOperationResponse(code: string, options?: msRest.RequestOptionsBase): Promise<msRest.HttpOperationResponse> {
    let client = this.client;
    // Validate
    try {
      if (code === null || code === undefined || typeof code.valueOf() !== 'string') {
        throw new Error('code cannot be null or undefined and it must be of type string.');
      }
    } catch (error) {
      return Promise.reject(error);
    }

    // Construct URL
    let baseUrl = this.client.baseUri;
    let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'sets/{code}';
    requestUrl = requestUrl.replace('{code}', encodeURIComponent(code));

    // Create HTTP transport objects
    let httpRequest = new WebResource();
    httpRequest.method = 'GET';
    httpRequest.url = requestUrl;
    httpRequest.headers = {};
    // Set Headers
    httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
    if(options && options.customHeaders) {
      for(let headerName in options.customHeaders) {
        if (options.customHeaders.hasOwnProperty(headerName)) {
          httpRequest.headers[headerName] = options.customHeaders[headerName];
        }
      }
    }
    // Send Request
    let operationRes: msRest.HttpOperationResponse;
    try {
      operationRes = await client.pipeline(httpRequest);
      let response = operationRes.response;
      let statusCode = response.status;
      if (statusCode !== 200) {
        let error = new msRest.RestError(operationRes.bodyAsText as string);
        error.statusCode = response.status;
        error.request = msRest.stripRequest(httpRequest);
        error.response = msRest.stripResponse(response);
        let parsedErrorResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedErrorResponse) {
            let internalError = null;
            if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
            error.code = internalError ? internalError.code : parsedErrorResponse.code;
            error.message = internalError ? internalError.message : parsedErrorResponse.message;
          }
          if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
            let resultMapper = Mappers.ErrorModel;
            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
          }
        } catch (defaultError) {
          error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                           `- "${operationRes.bodyAsText}" for the default response.`;
          return Promise.reject(error);
        }
        return Promise.reject(error);
      }
      // Deserialize Response
      if (statusCode === 200) {
        let parsedResponse = operationRes.parsedBody as { [key: string]: any };
        try {
          if (parsedResponse !== null && parsedResponse !== undefined) {
            let resultMapper = Mappers.Set;
            operationRes.parsedBody = client.serializer.deserialize(resultMapper, parsedResponse, 'operationRes.parsedBody');
          }
        } catch (error) {
          let deserializationError = new msRest.RestError(`Error ${error} occurred in deserializing the responseBody - ${operationRes.bodyAsText}`);
          deserializationError.request = msRest.stripRequest(httpRequest);
          deserializationError.response = msRest.stripResponse(response);
          return Promise.reject(deserializationError);
        }
      }

    } catch(err) {
      return Promise.reject(err);
    }

    return Promise.resolve(operationRes);
  }

  /**
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.SetList} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.SetList} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getAll(): Promise<Models.SetList>;
  getAll(options: msRest.RequestOptionsBase): Promise<Models.SetList>;
  getAll(callback: msRest.ServiceCallback<Models.SetList>): void;
  getAll(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SetList>): void;
  getAll(options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.SetList>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.SetList>;
    if (!callback) {
      return this.getAllWithHttpOperationResponse(options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.SetList);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getAllWithHttpOperationResponse(options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.SetList;
        return cb(err, result, data.request, data.response);
      });
    }
  }

  /**
   * @param {string} code
   *
   * @param {RequestOptionsBase} [options] Optional Parameters.
   *
   * @param {ServiceCallback} callback - The callback.
   *
   * @returns {ServiceCallback} callback(err, result, request, response)
   *
   *                      {Error|ServiceError}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {Models.Set} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link Models.Set} for more information.
   *
   *                      {WebResource} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {Response} [response] - The HTTP Response stream if an error did not occur.
   */
  getByCode(code: string): Promise<Models.Set>;
  getByCode(code: string, options: msRest.RequestOptionsBase): Promise<Models.Set>;
  getByCode(code: string, callback: msRest.ServiceCallback<Models.Set>): void;
  getByCode(code: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Set>): void;
  getByCode(code: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Set>): any {
    if (!callback && typeof options === 'function') {
      callback = options;
      options = undefined;
    }
    let cb = callback as msRest.ServiceCallback<Models.Set>;
    if (!callback) {
      return this.getByCodeWithHttpOperationResponse(code, options).then((operationRes: msRest.HttpOperationResponse) => {
        return Promise.resolve(operationRes.parsedBody as Models.Set);
      }).catch((err: Error) => {
        return Promise.reject(err);
      });
    } else {
      msRest.promiseToCallback(this.getByCodeWithHttpOperationResponse(code, options))((err: Error, data: msRest.HttpOperationResponse) => {
        if (err) {
          return cb(err);
        }
        let result = data.parsedBody as Models.Set;
        return cb(err, result, data.request, data.response);
      });
    }
  }

}
