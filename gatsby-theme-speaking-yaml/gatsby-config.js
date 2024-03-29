module.exports = (themeOptions) => {
  return {
    plugins: [
      `gatsby-transformer-yaml`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `src/data/`,
        },
      },
    ],
  }
}
