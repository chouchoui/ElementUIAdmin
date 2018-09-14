import { buildApiRequest as A, getApiUrl as G } from '@/api/init';

export default {
    login: (p: any, c: any) => A(p, 'user/login', 'post', c),
};


