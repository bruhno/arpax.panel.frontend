import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { InviteToInspectionAreaItem } from '@/domain/types';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<InviteToInspectionAreaItem>;

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
