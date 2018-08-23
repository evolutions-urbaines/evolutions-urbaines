require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const axios = require('axios')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const landingTemplate = path.resolve(`src/templates/landingTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
              collection
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
        path: node.fields.slug,
        component: path.resolve(
          `src/templates/${String(node.fields.collection)}Template.js`
        ),
        context: {
          id: node.id,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  switch (node.internal.type) {
    case 'MarkdownRemark':
      const slug = createFilePath({ node, getNode })
      createNodeField({
        node,
        name: 'slug',
        value: slug,
      })

      const parent = getNode(node.parent)
      createNodeField({
        node,
        name: 'collection',
        value: parent.sourceInstanceName,
      })

      break
    case 'CarsYaml':
      return new Promise((resolve, reject) => {
        axios
          .get(`${process.env.API_URL}/cars/${node.car_id}`, {
            headers: {
              'X-VL-Authorization': process.env.VL_AUTHORIZATION,
            },
          })
          .then(({ data }) => {
            createNodeField({
              node,
              name: 'url',
              value: data.url,
            })

            createNodeField({
              node,
              name: 'thumbUrl',
              value: data.photos[0].thumb_url,
            })

            createNodeField({
              node,
              name: 'city',
              value: data.city,
            })

            createNodeField({
              node,
              name: 'stats',
              value: data.stats,
            })

            resolve()
          })
          .catch(error => {
            console.log(error)
            reject()
          })
      })

      break
  }
}
