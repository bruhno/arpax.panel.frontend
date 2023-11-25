import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { SubmitReexaminationItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

interface RequestType extends RequestConfigType {
  query: {
    belt: number
  }
}
type ResponseType = Array<SubmitReexaminationItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block1', {
  isMock: appConfig.isMock,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-1.json').then(({ default: data }) => data);
  },
});
