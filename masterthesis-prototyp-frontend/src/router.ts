import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Upload from './views/Upload.vue';
import MyFiles from './views/MyFiles.vue';
import LinkCreate from './views/LinkCreate.vue';
import Logout from './views/Logout.vue';
import FileDelete from './views/FileDelete.vue';
import UserList  from './views/admin/UserList.vue';
import UserDelete  from './views/admin/UserDelete.vue';
import UserCreate  from './views/admin/UserCreate.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },    
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
    {
      path: '/link/:id',
      name: 'link',
      component: LinkCreate,
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: FileDelete,
    },
    {
      path: '/files',
      name: 'files',
      component: MyFiles,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload,
    },
    {
      path: '/admin/userlist',
      name: 'userlist',
      component: UserList,
    },
    {
      path: '/admin/user/delete/:id',
      name: 'userdelete',
      component: UserDelete,
    },
    {
      path: '/admin/user/create',
      name: 'usercreate',
      component: UserCreate,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
  ],
});
