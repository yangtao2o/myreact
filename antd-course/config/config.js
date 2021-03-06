export default {
  singular: true,
  plugins: [
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        locale: {
          enable: true, // 开启mock
        },
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../layout',
      routes: [
        {
          path: '/',
          component: 'HelloWorld',
        },
        {
          path: '/helloworld',
          component: 'HelloWorld',
        },
        {
          path: '/puzzlecards',
          component: 'puzzlecards',
        },
        {
          path: '/dashboard',
          routes: [
            { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
            { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
            { path: '/dashboard/workplace', component: 'Dashboard/Workplace' },
          ],
        },
        {
          path: '/context-menu',
          routes: [
            { path: '/context-menu/1', component: 'ContextMenu/Contexify' },
            { path: '/context-menu/2', component: 'ContextMenu/Context' },
            { path: '/context-menu/3', component: 'ContextMenu/Nested' },
          ],
        },
        {
          path: '/list-menu',
          routes: [
            { path: '/list-menu/1', component: 'List/Infinite' },
            { path: '/list-menu/2', component: 'List/Virtual' },
          ],
        },
      ],
    },
  ],
  proxy: {
    '/dev': {
      target: 'http://jsonplaceholder.typicode.com',
      changeOrigin: true,
      pathRewrite: { '^/dev': '' }, // 把 dev 重写掉
    },
  },
}
