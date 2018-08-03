import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Hero from '../components/hero'
import OneClickSearch from '../components/oneClickSearch'
import USP from '../components/uSP'
import CarDisplay from '../components/carDisplay'

const LandingTemplate = ({ data, location }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout
      pathname={location.pathname}
      segmentName={frontmatter.title}
      segmentLogoUrl={frontmatter.segmentLogoUrl}
    >
      <Hero segmentCategory={frontmatter.segmentCategory}>
        <div className="container position-relative">
          <div className="mb-5">
            <h2 className="h1">
              Des voitures {frontmatter.segmentAroundExpression}, prêtes à
              partir
            </h2>
            <h2 className="h3">Pour quelques heures ou quelques jours</h2>
          </div>

          <div className="mb-5">
            <OneClickSearch
              segmentCategory={frontmatter.segmentCategory}
              drivyAddressSearchUrl={frontmatter.drivyAddressSearchUrl}
            />
          </div>

          <p className="h5 font-weight-normal text-center text-lg-right">
            Voitures en autopartage proposées par Evolutions Urbaines sur la
            plateforme Drivy
          </p>
        </div>
      </Hero>

      <USP segmentCategory={frontmatter.segmentCategory} />

      <CarDisplay />
    </Layout>
  )
}

export default LandingTemplate

export const landingQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        segmentCategory
        segmentAroundExpression
        segmentLogoUrl
        drivyAddressSearchUrl
      }
    }
  }
`
