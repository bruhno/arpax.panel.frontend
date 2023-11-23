import ApiHost from './ApiHost';

export default new ApiHost(process.env.API_URL ?? '');
