import appConfig from '@/configs/appConfig';
import ApiHost from './ApiHost';

export default new ApiHost(appConfig.apiUrl, {
  headers: {
    'X-API-KEY': appConfig.apiKey,
  },
});
