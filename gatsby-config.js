module.exports = {
  siteMetadata: {
    name: 'Evolutions Urbaines',
    title: 'Des voitures autour de vous, prêtes à partir',
    description:
      'Des voitures autour de vous, prêtes à partir · Pour quelques heures ou quelques jours',
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
    'gatsby-plugin-purgecss',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages/landing`,
        name: 'landing',
      },
    },
    'gatsby-transformer-remark',
  ],
}
