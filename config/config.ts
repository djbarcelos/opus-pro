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
          icon: 'dashboard',
          name: 'Principal',
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
    'primary-color': '#DB9A00', // primary color for all components
    // 'primary-color': '#1890ff', // primary color for all components
    "link-color": "#DB9A00", // link color
    "success-color": "#52c41a", // success state color
    "warning-color": "#faad14", // warning state color
    "error-color": "#f5222d", // error state color
    "font-size-base": "14px", // major text font size
    "heading-color": "rgba(0, 0, 0, 0.85)", // heading text color
    "text-color": "rgba(0, 0, 0, 0.65)", // major text color
    "text-color-secondary": "rgba(0, 0, 0, 0.45)", // secondary text color
    "disabled-color": "rgba(0, 0, 0, 0.25)", // disable state color
    "border-radius-base": "2px", // major border radius
    "border-color-base": "#d9d9d9", // major border color
    "box-shadow-base": "0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05)" // major shadow for layers
  },
  // @ts-ignore
  title: defaultSettings.title,
  ignoreMomentLocale: true,
  manifest: {
    basePath: '/',
  }
});