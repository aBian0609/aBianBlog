module.exports = {
  title: 'Hello aBian',
  description: 'Hello, my friend!',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  themeConfig: {
    logo: '/images/logo.png',
    sidebar: [
      {
        title: 'Guide',   // 必要的
        path: '/guide/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 1,    // 可选的, 默认值是 1
        children: [
          '/',
          '/BOM',
          '/DOM'
        ]
      },
    ],
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/',

      },
      {
        text: 'Languages',
        items: [{
            text: 'Chinese',
            link: '/language/chinese'
          },
          {
            text: 'English',
            link: '/language/english'
          }
        ]
      },
      {
        text: 'External',
        link: 'https://www.baidu.com'
      },
    ]
  }
}