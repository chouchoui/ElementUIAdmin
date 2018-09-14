import Vue from 'vue';
import store from './store';
import './plugins/element.ts';
import 'font-awesome/css/font-awesome.css';
import './assets/css/style.css';
import router from './router';
import Config from './config';
import Api from './api';
import Function from './function';
import App from './App.vue';

Vue.config.productionTip = false;


declare module 'vue/types/vue' {
  // 可以使用 `VueConstructor` 接口
  // 来声明全局属性
  interface Vue {
    $Api: any;
    $Config: any;
    $Func: any;
  }
}

Vue.prototype.$Api = Api;
Vue.prototype.$Config = Config;
Vue.prototype.$Func = Function;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title ? to.meta.title + '-' + Config.siteName : Config.siteName;

  if (!sessionStorage.getItem(Config.tokenKey) && to.path !== '/login') {
    next({ path: '/login' });

  } else {
    next();
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
