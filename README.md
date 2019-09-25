## Description

This is a theme for a page that showcases conference speaking and available talks. The example repository shows the theme in use.

### Options

There are two options for this configuration.
The first is a title for the page.
The second is a boolean value to determine whether you would like to display the talks section of the theme. If set to true the talks.yaml file is necessary. If set to false, it is not.

### Dependencies

There are no dependencies beyond those included in the package.json file. Note that the example repository also includes the source-file-system plugin so that the location of the yaml files is discoverable.

## How to install

Instructions for installing a theme are available here: https://www.gatsbyjs.org/docs/themes/using-a-gatsby-theme/

This particular theme requires model data that matches the queries. Examples of this data structure can be found in the example project.

## When do I use this theme?

This theme is perfect for speakers who want to showcase their events and talks on their personal site.

## Examples of usage

To use the theme import it as if it were any other plugin.

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

## Unfinished Work

This theme is a work in progress. Next steps include more configurable options for display and content.
