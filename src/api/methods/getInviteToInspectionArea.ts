import { defaultHost, type RequestConfigType } from '@/api/Host';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<{
  passenger: string
  flightNum: string
  destination: string
  scheduleTime: string
  estimateTime?: string
}>;

export default defaultHost.createRequest<RequestType, ResponseType>(
  'get',
  '/invite-to-inspection-area',
  {
    isMock: import.meta.env.VITE_IS_MOCK ?? false,

    getMockData(): Promise<ResponseType> {
      return import('../_mock/block-3.json').then(({ default: data }) => data);
    },
  },
);
