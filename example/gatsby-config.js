module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-speaking-yaml',
      options: {
        heading: 'Speaking Engagements',
        displayTalks: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
  ],
}
