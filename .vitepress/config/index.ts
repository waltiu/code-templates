import { defineConfig } from 'vitepress'
import { searchOptions } from './search'
export const META_IMAGE = 'https://pinia.vuejs.org/social.png'
export const isProduction =
  process.env.NETLIFY && process.env.CONTEXT === 'production'

if (process.env.NETLIFY) {
  console.log('Netlify build', process.env.CONTEXT)
}


const rControl = /[\u0000-\u001f]/g
const rSpecial = /[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g
const rCombining = /[\u0300-\u036F]/g

/**
 * Default slugification function
 */
export const slugify = (str: string): string =>
  str
    .normalize('NFKD')
    // Remove accents
    .replace(rCombining, '')
    // Remove control characters
    .replace(rControl, '')
    // Replace special characters
    .replace(rSpecial, '-')
    // ensure it doesn't start with a number
    .replace(/^(\d)/, '_$1')

export default defineConfig({
  title: '研发白皮书',
  description: '研发白皮书啊！',
  appearance: 'dark',
  markdown: {
    theme: {
      dark: 'dracula-soft',
      light: 'vitesse-light',
    },

    attrs: {
      leftDelimiter: '%{',
      rightDelimiter: '}%',
    },

    anchor: {
      slugify,
    },
  },

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.png' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }],
    [
      'meta',
      { name: 'hello', content: 'world' },
    ],
    [
      'meta',
      { name: 'hello', content: 'frontend' },
    ],
  ],

  themeConfig: {
    logo: '/logo.png',
    socialLinks: [
      { icon: 'x', link: 'https://twitter.com/posva' }
    ],
    footer: {
      copyright: 'Copyright © 2019-present Eduardo San Martin Morote',
      message: 'Released under the MIT License.',
    },
    search: {
      provider: 'algolia',
      options: {
        appId: '69Y3N7LHI2',
        apiKey: '45441f4b65a2f80329fd45c7cb371fea',
        indexName: 'pinia',
        locales: { ...searchOptions },
      },
    },
    outline: {
      label: '本页内容',
    },

    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    nav: [
      {
        text: '指南',
        link: '/src/core-concepts/',
        activeMatch: '^/src/core-concepts/',
      },
      { text: 'API', link: '/src/api/', activeMatch: '^/src/api/' },
      { text: '手册', link: '/src/cookbook/', activeMatch: '^/src/cookbook/' },
      {
        text: '相关链接',
        items: [
          {
            text: '论坛',
            link: 'https://github.com/vuejs/pinia/discussions',
          },
          {
            text: '更新日志',
            link: 'https://github.com/vuejs/pinia/blob/v2/packages/pinia/CHANGELOG.md',
          },
          {
            text: 'Vue.js 认证',
            link: 'https://certificates.dev/vuejs/?friend=VUEROUTER&utm_source=pinia_vuejs&utm_medium=link&utm_campaign=pinia_vuejs_links&utm_content=navbar',
          },
        ],
      },
    ],
    sidebar: {
      '/src/api/': [
        {
          text: 'packages',
          items: [
            { text: 'pinia', link: '/src/api/modules/pinia.html' },
            { text: '@pinia/nuxt', link: '/src/api/modules/pinia_nuxt.html' },
            {
              text: '@pinia/testing',
              link: '/src/api/modules/pinia_testing.html',
            },
          ],
        },
      ],
      '/src/': [
        {
          text: '介绍',
          items: [
            {
              text: 'Pinia 是什么？',
              link: '/src/introduction.html',
            },
            {
              text: '开始',
              link: '/src/getting-started.html',
            },
          ],
        },
        {
          text: '核心概念',
          items: [
            { text: '定义 Store', link: '/src/core-concepts/' },
            { text: 'State', link: '/src/core-concepts/state.html' },
            { text: 'Getter', link: '/src/core-concepts/getters.html' },
            { text: 'Action', link: '/src/core-concepts/actions.html' },
            { text: '插件', link: '/src/core-concepts/plugins.html' },
            {
              text: '组件外的 Store',
              link: '/src/core-concepts/outside-component-usage.html',
            },
          ],
        },
        {
          text: '服务端渲染 (SSR)',
          items: [
            {
              text: 'Vue 与 Vite',
              link: '/src/ssr/',
            },
            {
              text: 'Nuxt.js',
              link: '/src/ssr/nuxt.html',
            },
          ],
        },
        {
          text: '手册',
          collapsed: false,
          items: [
            {
              text: '目录',
              link: '/src/cookbook/',
            },
            {
              text: '从 Vuex ≤4 迁移',
              link: '/src/cookbook/migration-vuex.html',
            },
            {
              text: '热更新',
              link: '/src/cookbook/hot-module-replacement.html',
            },
            {
              text: '测试',
              link: '/src/cookbook/testing.html',
            },
            {
              text: '不使用 setup() 的用法',
              link: '/src/cookbook/options-api.html',
            },
            {
              text: '组合式 Stores',
              link: '/src/cookbook/composing-stores.html',
            },
            {
              text: 'VSCode 代码片段',
              link: '/src/cookbook/vscode-snippets.html',
            },
            {
              text: '从 v0/v1 迁移至 v2',
              link: '/src/cookbook/migration-v1-v2.html',
            },
            {
              text: '处理组合式函数',
              link: '/src/cookbook/composables.html',
            },
          ],
        },
      ],
    },
  }
})
