module.exports = {
    title: 'shimisu.net',
    description: 'shimisu.net site.',
    lang: 'ja',
    dest: 'dist',
    head: [
        [ 'link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { 
              text: 'Link',
              items: [
                  { text: 'Twitter', link: 'https://www.twitter.com/shimisu_k' }
              ]
            }
        ]
    }
}