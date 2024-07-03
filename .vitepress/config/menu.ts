export const productMenusConfig = {
  link: "/src/project",
  text: "产品",
  items: [
    {
      text:"产品矩阵"
    },
    {
      text:"系统列表",
      items:[
        {
          text: '项目1',
          link: '/src/introduction.html',
        },
        {
          text: '项目2',
          link: '/src/introduction.html',
        }
      ]
    }
  ]
}
export const feMenusConfig = {
  link: "/src/fe",
  text: "前端",
  items: [
    {
      text:"团队技术栈",
      items:[
        {
          text: '项目列表',
          link: '/src/introduction.html',
        },
        {
          text: '传统项目（Vue）',
          link: '/src/introduction.html',
        },
        {
          text: 'AI大数据项目（React）',
          link: '/src/introduction.html',
        },
      ]
    },
    {
      text: '开发规范',
      collapsed: false,
      items: [
        {
          text: '开发流程规范',
          link: '/src/introduction.html',
        },
        {
          text: '目录结构规范',
          link: '/src/introduction.html',
        },
        {
          text: '版本控制规范',
          link: '/src/introduction.html',
        },
        {
          text: '代码编写规范',
          link: '/src/introduction.html',
        },
      ],
    },
    {
      text: '团队沉淀',
      collapsed: false,
      items: [
        { text: 'wl-http', link: '/src/core-concepts/' },
        { text: 'wl-create-app', link: '/src/core-concepts/state.html' },
      ],
    }
  ]
}
export const backMenusConfig = {
  link: "/src/back",
  text: "后端",
  items: [
    {
      text:"团队技术栈",
      collapsed: true,
      items:[
        {
          text: '项目列表',
          link: '/src/introduction.html',
        },
        {
          text: '传统项目（Vue）',
          link: '/src/introduction.html',
        },
        {
          text: 'AI大数据项目（React）',
          link: '/src/introduction.html',
        },
      ]
    },
    {
      text: '开发规范',
      collapsed: true,
      items: [
        {
          text: '开发流程规范',
          link: '/src/introduction.html',
        },
        {
          text: '目录结构规范',
          link: '/src/introduction.html',
        },
        {
          text: '版本控制规范',
          link: '/src/introduction.html',
        },
        {
          text: '代码编写规范',
          link: '/src/introduction.html',
        },
      ],
    },
  ]
}
export const devopsMenusConfig = {
  link: "https://www.baidu.com/",
  text: "运维",
}

export const homeMenusConfig = {
  text: "全部",
  items: [
    {
      text: "简介",
      items:[
        {
          text: "关于白皮书",
          link: "/src/main/develop.md"
        }
      ]

    },
    productMenusConfig,
    feMenusConfig,
    backMenusConfig,
    devopsMenusConfig
  ]
}