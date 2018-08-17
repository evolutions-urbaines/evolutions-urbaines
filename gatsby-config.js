module.exports = {
  siteMetadata: {
    name: 'Evolutions Urbaines',
    title: 'Des voitures autour de vous, prêtes à partir',
    description:
      'Des voitures autour de vous, prêtes à partir · Pour quelques heures ou quelques jours',
    fbAppId: '1924219127626654',
    keywords:
      'evolutions, urbaines, autopartage, auto, partage, drivy, open, libre, service, location, particulier, particuliers, professionnel, professionnels, voiture, voitures, véhicule, véhicules',
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
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        whitelist: ['collapse', 'navbar-collapse', 'navigation-opened', 'show'],
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/articles`,
        name: 'articles',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/landings`,
        name: 'landings',
      },
    },
    'gatsby-transformer-remark',
  ],
}
