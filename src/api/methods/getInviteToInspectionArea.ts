import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { InviteToInspectionAreaItem } from '@/domain/types';
import appConfig from '@/configs/appConfig';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<InviteToInspectionAreaItem>;

export default defaultHost.createRequest<RequestType, ResponseType>('get', '/block3', {
  isMock: appConfig.isMock,

  getMockData(): Promise<ResponseType> {
    return import('../_mock/block-3.json').then(({ default: data }) => data);
  },
});
