// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/moraes/projects/ngo/react/opus-pro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/home/moraes/projects/ngo/react/opus-pro/src/App').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "Principal",
        "icon": "dashboard",
        "component": require('/home/moraes/projects/ngo/react/opus-pro/src/pages/dashboard').default,
        "exact": true
      },
      {
        "path": "/constructions",
        "name": "Principal",
        "icon": "constructions",
        "component": require('/home/moraes/projects/ngo/react/opus-pro/src/pages/constructions/constructions').default,
        "exact": true
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
