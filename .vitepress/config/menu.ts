export const feMenusConfig={
    link:"/src/fe",
    text:"前端",
    children:[
        {
            text: '介绍',
            items: [
              {
                text: 'Pinia 是什么？',
                link: '/src/introduction.html',
              },
              {
                text: '开始',
                link: '/src/introduction.html',

                children:[
                    {
                        text: 'Pinia 是什么？',
                        link: '/src/introduction.html',
                      },
                      {
                        text: 'Pinia 是什么？',
                        link: '/src/introduction.html',
                      },
                ]
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
    ]
}
export const backMenusConfig={
    link:"/src/back",
    text:"后端",
    children:[]
}
export const devopsMenusConfig={
    link:"/src/devops",
    text:"运维",
    children:[]
}