import axios, { type AxiosInstance } from 'axios';
import {
  type CreateHostOptions,
  type CreateRequestOptions,
  type Methods,
  type RequestConfigType,
} from '@/api/Host/types';

import { createUrl } from 'url-fns';

class ApiHost {
  private _axios: AxiosInstance;

  constructor(baseURL: string, options: CreateHostOptions = {}) {
    this._axios = axios.create({
      baseURL,
      ...options,
    });
  }

  createRequest<RequestType extends RequestConfigType, ResponseType>(
    method: Methods,
    url: string,
    options: CreateRequestOptions<RequestConfigType, ResponseType>,
  ) {
    if (options.isMock) {
      return (payload: RequestType) => options.getMockData?.(payload);
    }

    function applyPathParams(pathParams: Record<string, string>): string {
      return createUrl({
        path: url,
        pathParams,
      });
    }

    return (payload: RequestType): Promise<ResponseType> => this._axios
      .request<ResponseType>({
      method,
      url: applyPathParams(payload.pathParams ?? {}),
      data: payload.data,
      params: payload.query,
      responseType: 'json',
    })
      .then(({ data }) => data);
  }
}

export default ApiHost;
