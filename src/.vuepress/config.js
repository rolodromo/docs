module.exports = {
  title: 'Rolodromo Docs',
  description: 'Herramientas digitales para tus partidas de rol',
  themeConfig: {
    repo: 'rolodromo',
    docsRepo: 'vuejs/vuepress',
    docsDir: 'src',
    nav: [
      {
        text: 'Docs',
        items: [
          { text: 'Bots', link: '/bots/' },
          { text: 'Módulos NPM', link: '/npm/' },
          { text: 'DevOps', link: '/devops/' },
          { text: 'APIs', link: '/apis/' },
        ]
      },
      {
        text: 'Apps',
        items: [
          { text: '@roleandobot', link: 'http://twitter.com/roleandobot' },
          { text: 'Discord server', link: 'https://discord.gg/Zvr7p98' },
          { text: 'Rolodromo', link: 'http://rolodromo.com' },
        ]
      },
    ],
    sidebar: 'auto'
  }
}
