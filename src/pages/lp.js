import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const LPPage = ({ data: { allMarkdownRemark }, location }) => (
  <Layout {...{ location }}>
    <Helmet
      meta={[
        {
          name: 'robots',
          content: 'noindex',
        },
      ]}
    />

    <ul>
      {allMarkdownRemark.edges.map(
        ({
          node: {
            id,
            frontmatter: { title, segmentCategory, segmentRecommendation },
            fields: { slug },
          },
        }) => (
          <li className="mb-3" key={id}>
            <Link to={slug}>
              {segmentCategory} · {title} · {slug}
              {segmentRecommendation && (
                <span>
                  {' '}
                  · <span className="text-danger">reco</span>
                </span>
              )}
            </Link>
          </li>
        )
      )}
    </ul>
  </Layout>
)

export default LPPage

export const LPQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {
        fields: [frontmatter___segmentCategory, frontmatter___title]
        order: ASC
      }
      filter: { fields: { collection: { eq: "landings" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            segmentCategory
            segmentRecommendation
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
