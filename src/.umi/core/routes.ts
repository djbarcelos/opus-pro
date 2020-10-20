// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/home/diogo/projects/ngo/opus-pro/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('/home/diogo/projects/ngo/opus-pro/src/layout/layoutBasic').default,
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard",
        "exact": true
      },
      {
        "path": "/dashboard",
        "icon": "dashboard",
        "name": "Principal",
        "component": require('/home/diogo/projects/ngo/opus-pro/src/pages/dashboard').default,
        "exact": true
      },
      {
        "path": "/obras",
        "name": "Obras",
        "icon": "",
        "component": require('/home/diogo/projects/ngo/opus-pro/src/pages/constructions').default,
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
