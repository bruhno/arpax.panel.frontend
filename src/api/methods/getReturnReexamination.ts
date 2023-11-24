import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { ReturnReexaminationItem } from '@/domain/types';

interface RequestType extends RequestConfigType {
  query: {
    belt: number
  }
}
type ResponseType = Array<ReturnReexaminationItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block2', {
  isMock: import.meta.env.VITE_IS_MOCK ?? false,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-2.json').then(({ default: data }) => data);
  },
});
