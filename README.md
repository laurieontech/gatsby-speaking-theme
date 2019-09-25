## Description

This is a theme for a page that showcases conference speaking and available talks. The example repository shows the theme in use.

### Dependencies (optional)

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
  plugins: ['gatsby-theme-speaking-yaml'],
}
```

## Unfinished Work

This theme is a work in progress. Next steps include more configurable options for display and content. As well as optional sections that don't require shadowing on the part of the user.
