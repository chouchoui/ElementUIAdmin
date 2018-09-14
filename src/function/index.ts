export default {

  setLoginUser(data: any) {
    sessionStorage.setItem('user', JSON.stringify(data));
  },
  getLoginUser() {
    return JSON.parse(sessionStorage.getItem('user') as string);
  },
  hasValInArrayObj(arr: any, key: any, val: any) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] === val) {
        return i;
      }
    }
    return -1;
  },
};
