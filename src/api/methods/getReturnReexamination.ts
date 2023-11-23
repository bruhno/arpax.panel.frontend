import { defaultHost, type RequestConfigType } from '@/api/Host';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<{
  passenger: string
  baggageNum: string
  flightNum: string
  destination: string
  scheduleTime: string
  inspection: string
  estimateTime?: string
  removed?: boolean
}>;

export default defaultHost.createRequest<RequestType, ResponseType>(
  'get',
  '/return-reexamination',
  {
    isMock: import.meta.env.VITE_IS_MOCK ?? false,

    getMockData(): Promise<ResponseType> {
      return import('../_mock/block-2.json').then(({ default: data }) => data);
    },
  },
);
