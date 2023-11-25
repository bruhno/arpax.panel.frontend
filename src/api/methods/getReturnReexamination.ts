import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { ReturnReexaminationItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

interface RequestType extends RequestConfigType {
  query: {
    belt: number
  }
}
type ResponseType = Array<ReturnReexaminationItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block2', {
  isMock: appConfig.isMock,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-2.json').then(({ default: data }) => data);
  },
});
