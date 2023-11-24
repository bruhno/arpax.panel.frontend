import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { DeliverReexaminationFTSItem } from '@/domain/types';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<DeliverReexaminationFTSItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block4', {
  isMock: import.meta.env.VITE_IS_MOCK ?? false,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-4.json').then(({ default: data }) => data);
  },
});
