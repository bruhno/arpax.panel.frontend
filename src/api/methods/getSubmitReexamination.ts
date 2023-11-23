import { defaultHost, type RequestConfigType } from '@/api/Host';
import type { SubmitReexaminationItem } from '@/domain/types';

interface RequestType extends RequestConfigType {}
type ResponseType = Array<SubmitReexaminationItem>;

export default defaultHost.createRequest<RequestType, ResponseType>(
  'get',
  '/submit-reexamination',
  {
    isMock: import.meta.env.VITE_IS_MOCK ?? false,

    getMockData(): Promise<ResponseType> {
      return import('../_mock/block-1.json').then(({ default: data }) => data);
    },
  },
);
