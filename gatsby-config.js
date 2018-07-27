module.exports = {
  siteMetadata: {
    name: 'Evolutions Urbaines',
    title: 'Des véhicules en autopartage',
    description: 'Des véhicules en autopartage',
    keywords: 'evolutions, urbaines, autopartage',
    siteUrl: 'https://evolutions-urbaines.fr',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-122641452-1',
      },
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        precision: 8,
      },
    },
    'gatsby-plugin-purgecss',
    'gatsby-plugin-sitemap',
  ],
}
