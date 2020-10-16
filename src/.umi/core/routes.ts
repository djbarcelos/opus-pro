// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/diogo/projects/ngo/react-app/opus-pro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/home/diogo/projects/ngo/react-app/opus-pro/src/layout/layoutBasic').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "Principal",
        "icon": "",
        "component": require('/home/diogo/projects/ngo/react-app/opus-pro/src/pages/dashboard').default,
        "exact": true
      },
      {
        "path": "/obras",
        "name": "Obras",
        "icon": "",
        "component": require('/home/diogo/projects/ngo/react-app/opus-pro/src/pages/constructions').default,
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
