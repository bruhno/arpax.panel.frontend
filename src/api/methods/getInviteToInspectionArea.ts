import { defaultHost, type RequestConfigType } from '@/api/Host';
import * as process from 'process';

interface RequestType extends RequestConfigType {}
interface ResponseType {
  passenger: string
  flightNum: string
  destination: string
  scheduleTime: string
  estimateTime: string
}

export default defaultHost.createRequest<RequestType, ResponseType>(
  'get',
  '/invite-to-inspection-area',
  {
    isMock: process.env.IS_MOCK ?? false,

    getMockData(): Promise<ResponseType> {
      return import(`${process.env.MOCK_PATH}/block-3.json`);
    },
  },
);
