import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { DeliverReexaminationFTSItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<DeliverReexaminationFTSItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block4', {
  isMock: appConfig.isMock,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-4.json').then(({ default: data }) => data);
  },
});
