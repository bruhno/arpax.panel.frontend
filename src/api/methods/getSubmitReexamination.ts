import { defaultHost, type RequestConfigType } from '@/api/Host';
import * as process from 'process';

interface RequestType extends RequestConfigType {}
interface ResponseType {
  passenger: string
  baggageNum: string
  flightNum: string
  destination: string
  scheduleTime: string
  estimateTime?: string
  inspection: string
}

export default defaultHost.createRequest<RequestType, ResponseType>(
  'get',
  '/submit-reexamination',
  {
    isMock: process.env.IS_MOCK ?? false,

    getMockData(): Promise<ResponseType> {
      return import(`${process.env.MOCK_PATH}/block-1.json`);
    },
  },
);
