import user from '@/api/user';
import file from '@/api/file';
import permissions from '@/api/permissions';

const allApi = Object.assign(
  user,
  file,
  permissions,
);

export default allApi;
