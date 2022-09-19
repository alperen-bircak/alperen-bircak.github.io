module.exports = {
  siteMetadata: {
    title: `Alperen Bircak CV`,
    siteUrl: `https://www.alperen-bircak.github.io`
  },
  plugins: ["gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-image`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/images/icon.png"
      }
    }]
};