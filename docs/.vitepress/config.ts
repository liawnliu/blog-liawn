import { defineConfig } from 'vitepress';
import sidebar from'./sidebar';
import renderInlineCode from "./render-inline-code.js"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Liawn\'s blog',
  description: '用vuepress2搭建的个人博客',
  srcDir: './src',
  base: '/',
  head: [
      ['meta', {charset: 'UTF-8'}],
      ['link', { rel: 'icon', href: '/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
      ['link', { rel: 'manifest', href: '/manifest.json' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
      ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
      ['link', { rel: 'apple-touch-icon', href: '/apple-touch-icon-152x152.png' }],
      ['link', { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ffffff' }],
      ['meta', { name: 'msapplication-TileImage', content: '/msapplication-icon-144x144.png' }],
      ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '前端', link: '/front-end/' },
      { text: '后端', link: '/back-end/' },
      { text: '生活', link: '/my-life/' }
    ],
    sidebar,
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/liawnliu/blog-liawn' }
    ],
    footer: {
      message: 'MIT Licensed | Copyright © 2023-present LiawnLiu'
    }
  },
  markdown: {
    config: md => {
      md.use(renderInlineCode);
    }
  }
})
