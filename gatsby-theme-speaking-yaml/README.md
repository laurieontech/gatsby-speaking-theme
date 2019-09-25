# A Gatsby theme for showcasing your speaking engagements

## Quick Start

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-speaking-yaml and it's dependencies
yarn add gatsby react react-dom gatsby-theme-speaking-yaml
```

Then add the theme to your `gatsby-config.js`. Note the options.

```javascript
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-theme-speaking-yaml',
      options: {
        title: 'Speaking Engagements',
        displayTalks: true,
      },
    },
  ],
}
```

That's it, you can now run your gatsby site using

```shell
yarn gatsby develop
```
