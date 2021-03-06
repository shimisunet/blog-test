const css = require('stylus-loader'); //処理されたurl（...）を持つCSS

module.exports = {
    title: 'shimisu.net',
    description: 'shimisu.net site.',
    dest: 'docs',
    base: '/blog-test/',
    locales :{
        '/': {
            lang: 'ja'
        }
    },
    head: [
        [ 'link', { rel: 'icon', type: 'image/png', href: '/favicon.png' } ]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'About', link: '/about/' },
            { 
              text: 'Link',
              items: [
                  { text: 'Twitter', link: 'https://www.twitter.com/' }
              ]
            }
        ],
        lastUpdated: true
    },
    markdown: {
        anchor: {
            permalink: false
        }
    },
    module: {
        loaders: [{
            test: /\.styl$/,
            loader: 'stylus-loader'
        }]
    }
}