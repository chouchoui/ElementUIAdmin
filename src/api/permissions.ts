import { buildApiRequest as A, getApiUrl as G } from '@/api/init';
export default {
  permissionAll: (p: any, c: any) => A(p, 'permission/permission_all', 'get', c),
  permissionEdit: (p: any, c: any) => A(p, 'permission/permission_edit', 'post', c),
};
