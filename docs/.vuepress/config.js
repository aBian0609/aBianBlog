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
  base: '/blog/',
  evergreen: true,
  themeConfig: {
    logo: '/images/logo.png',
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