module.exports = {
  plugins: [
    'gatsby-theme-speaking-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
