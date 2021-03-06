import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const ArticleTemplate = ({ data, location }) => {
  const { frontmatter, html } = data.markdownRemark

  return (
    <Layout
      {...{ location }}
      segmentName={frontmatter.title}
      segmentLogoUrl={frontmatter.segmentLogoUrl}
      segmentDrivyReferralUrl={frontmatter.segmentDrivyReferralUrl}
    >
      <div className="container">
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default ArticleTemplate

export const articleQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        date
        title
      }
      html
    }
  }
`
