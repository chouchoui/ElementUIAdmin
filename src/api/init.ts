import ElementUI from 'element-ui';
import Axios from 'axios';
import Config from '@/config';

function buildApiUrl(url: string) {
  return `${Config.apiUrl}/${Config.apiPrefix}/${url}`;
}

function setToken() {
  const key: string = 'Authorization';
  Axios.defaults.headers[key] = sessionStorage.getItem(Config.tokenKey);
}

function isFunction(fn: any) {
  return Object.prototype.toString.call(fn) === '[object Function]';
}

function buildServerApiRequest(params: any, url: string, type: string, callback: any) {
  setToken();
  if ('get' === type) {
    params = { params };
    // 做一些加载的小动画挺好
  }
  const apiUrl = buildApiUrl(url);
  const result = Axios[type](apiUrl, params);

  if (isFunction(callback)) {// 没有回调则返回es6 promise
    result.then((r: any) => {
      r = r.data;
      // 这里可以根据后台数据进一步做一些过滤或者报错之类的
      callback(r);
    }).catch((e: any) => {
      ElementUI.Notification.error({
        title: '请求错误',
        message: 'Network Error',
      });
    });
  }
  return result;
}


export function buildApiRequest(params: any, url: string, type: string, callback: any) {
  return buildServerApiRequest(params, url, type, callback);
}

export function getApiUrl(url: string) {
  // 只是返回api地址而不做请求，用在上传组件之类的
  return buildApiUrl(url) + '?token=' + sessionStorage.getItem(Config.tokenKey);
}

