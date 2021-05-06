module.exports = {
  title: 'aBianBlog',
  description: '欢迎来到我的博客',
  head: [
    ['link', {
      rel: 'icon',
      href: `/favicon.ico`
    }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  base: '/aBianBlog/',
  evergreen: true,
  themeConfig: {
    // logo: '/images/logo.png',
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '文章',
        link: '/article/',
      },
      {
        text: '微语',
        link: '/whispers/',
      },
      {
        text: 'Languages',
        items: [{
            text: '中文',
            link: '/language/chinese'
          },
          {
            text: 'English',
            link: '/language/english'
          }
        ]
      },
      {
        text: '微博',
        link: 'https://weibo.com/u/5939146360'
      },
    ]
  }
}