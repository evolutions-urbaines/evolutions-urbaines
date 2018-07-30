const path = require('path')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const landingTemplate = path.resolve(`src/templates/landingTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: landingTemplate,
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
