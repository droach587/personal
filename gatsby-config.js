const globImporter = require('node-sass-glob-importer');
const path = require('path');

module.exports = {
  siteMetadata: {
    title: `David Roach - Technologist and Front End Developer`,
    description: `More importantly, David has 9+ years of proven development experience leading development teams as a creative technologist, technical director, and front-end developer. `,
    author: `David Roach`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `david-roach-personal-web`,
        short_name: `droach`,
        start_url: `/`,
        background_color: `#32C5FF`,
        theme_color: `#32C5FF`,
        display: `minimal-ui`,
        icon: `src/images/roach-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options:{
        sassOptions: {
          includePaths: ['node_modules/foundation-sites/scss',],
          importer: globImporter()
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
