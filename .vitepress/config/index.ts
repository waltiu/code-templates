import { defineConfig } from 'vitepress'
import { searchOptions } from './search'
import { backMenusConfig, devopsMenusConfig, feMenusConfig } from './menu'
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
      feMenusConfig,
      backMenusConfig,
      devopsMenusConfig,
      {
        text: '相关链接',
        items: [
          {
            text: 'github',
            link: 'https://github.com/',
          },
          {
            text: '掘金',
            link: 'https://juejin.cn/',
          }
        ],
      },
    ],
    sidebar: {
      [feMenusConfig.link]: feMenusConfig.children,
      [backMenusConfig.link]: backMenusConfig.children,
      [devopsMenusConfig.link]: devopsMenusConfig.children,
    },
  }
})
