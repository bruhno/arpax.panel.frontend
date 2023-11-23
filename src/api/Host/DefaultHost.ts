import ApiHost from './ApiHost';

export default new ApiHost(import.meta.env.VITE_API_URL ?? '');
