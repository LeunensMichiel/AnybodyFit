module.exports = {
  siteMetadata: {
    title: `AnybodyFit`,
    description: `AnybodyFit, personal coaching based in Ghent, Belgium`,
    author: `@LeunensMichiel`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `AnybodyFit - Personal Coaching`,
        short_name: `AnybodyFit`,
        description: `AnybodyFit, personal coaching based in Ghent, Belgium`,
        lang: `en`,
        start_url: `/`,
        background_color: `#FF5858`,
        theme_color: `#212121`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        publicPath: `admin`,
        htmlTitle: `Manage AnybodyFit Content`,
      },
    },
    "gatsby-plugin-netlify-cache",
  ],
}
