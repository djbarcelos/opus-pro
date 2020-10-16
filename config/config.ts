import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';

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
      component: '../layout/layoutBasic',
      routes: [
        {
          path: '/',
          redirect: '/dashboard',
        },
        {
          path: '/dashboard',
          name: 'Principal',
          icon: '',
          component: './dashboard',
        },
        {
          path: '/obras',
          name: 'Obras',
          icon: '',
          component: './constructions',
        }
      ],
    },

  ],
  // routes: [
  //   { path: '/', component: '../App' },
  //   { path: '/dashboard', component: './dashboard/index' }
  // ],
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: defaultSettings.title,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  }
});