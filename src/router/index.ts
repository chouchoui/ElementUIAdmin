import Vue from 'vue';
import Router from 'vue-router';
import Personal from '@/router/personal';

Vue.use(Router);



const RouteList = [
  {
    path: '/',
    component: () => import('../views/Layout/App.vue'),
    meta: {
      title: '首页',
      keepAlive: false,
    },
    children: [
      {
        path: '/',
        name: 'Dashboard',
        meta: {
          title: '首页',
          keepAlive: false,
        },
        component: () => import('../views/Home/Index.vue'),
      },
      {
        path: '/font_awesome',
        name: 'FontAwesome',
        meta: {
          title: 'FontAwesome 图标',
          keepAlive: false,
        },
        component: () => import('../views/Icon/FontAwesome.vue'),
      },
      {
        path: '/element_icon',
        name: 'ElementIcon',
        meta: {
          title: 'Element 图标',
          keepAlive: false,
        },
        component: () => import('../views/Icon/ElementIcon.vue'),
      },
      {
        path: '/post_manage',
        name: 'PostManage',
        meta: {
          title: '文章管理',
          keepAlive: false,
        },
        component: () => import('../views/ContentManage/Index.vue'),
      },
      {
        path: '/user_manage',
        name: 'UserManage',
        meta: {
          title: '用户列表',
          keepAlive: true,
        },
        component: () => import('../views/UserManage/Index.vue'),
      },
      {
        path: '/category_manage',
        name: 'CategoryManage',
        meta: {
          title: '分类列表',
          keepAlive: true,
        },
        component: () => import('../views/CategoryManage/Index.vue'),
      },
      {
        path: '/role_manage',
        name: 'RoleManage',
        meta: {
          title: '角色列表',
          keepAlive: true,
        },
        component: () => import('../views/PermissionManage/Role/Role.vue'),
      },
      {
        path: '/permission_list',
        name: 'PermissionList',
        meta: {
          title: '权限列表',
          keepAlive: true,
        },
        component: () => import('../views/PermissionManage/Permission/Index.vue'),
      },
      // 个人中心，可能有修改密码，头像修改等路由
      Personal.index,
    ],
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '后台登录',
      keepAlive: false,
    },
    components: {
      blank: () => import('../views/Login/Login.vue'),
    },
  },

];


// RouteList[0].children.push({
//   path: '/build_code',
//   name: 'BuildCode',
//   meta: {
//     title: '构建代码',
//     keepAlive: true,
//   },
//   component: () => import('../views/DevelopmentTool/Build.vue'),
// });

export default new Router({routes: RouteList});


