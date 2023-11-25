type Methods = 'get' | 'post' | 'put' | 'delete';

type CreateHostOptions = Partial<{
  headers: Record<string, string>
}>;

interface RequestConfigType {
  query?: {
    [key: string]: string | number | boolean
  }
  pathParams?: Record<string, string>
  data?: FormData | Record<string, any> | File | string
}

interface CreateRequestOptions<CurrentRequestConfigType, ResponseType> {
  getMockData?(request: CurrentRequestConfigType): Promise<ResponseType>
  isMock?: boolean
}

export type {
  Methods, CreateHostOptions, RequestConfigType, CreateRequestOptions,
};
