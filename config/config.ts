import { defineConfig } from 'umi';

export default defineConfig({
  // locale: { antd: true },
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    default: 'pt-BR',
    antd: true,
    baseNavigator: true,
  },
  pwa: false,
  routes: [
    {
      path: '/',
      component: '../App',
      routes: [
        {
          path: '/',
          redirect: '/dashboard',
        },
        {
          path: '/dashboard',
          name: 'Principal',
          icon: 'dashboard',
          component: './dashboard',
        },
        {
          path: '/constructions',
          name: 'Principal',
          icon: 'constructions',
          component: './constructions/constructions',
        }
      ],
    },

  ],
  // routes: [
  //   { path: '/', component: '../App' },
  //   { path: '/dashboard', component: './dashboard/index' }
  // ],
  manifest: {
    basePath: '/',
  }
});