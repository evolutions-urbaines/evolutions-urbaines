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
      segmentDrivyReferralUrl={frontmatter.segmentDrivyReferralUrl}
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

      {frontmatter.segmentRecommendation && (
        <div className="row shadow-steel">
          <div
            className="col-md bg-cover"
            style={{
              backgroundImage: `url(${frontmatter.segmentBackgroundUrl ||
                'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'})`,
            }}
          />

          <div className="col-md">
            <div className="m-5">
              <article className="review_card">
                <div
                  className="review_card__avatar"
                  style={{
                    backgroundImage: `url(${frontmatter.segmentRepresentativePhotoUrl ||
                      'https://images.pexels.com/photos/774095/pexels-photo-774095.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'})`,
                  }}
                />
                <div className="review_card__user">
                  {frontmatter.segmentRepresentativeName || 'Brigitte M.'}
                </div>
                <div className="review_card__details">
                  {frontmatter.segmentRepresentativeRole ||
                    `Collaboratrice ${frontmatter.title}`}
                </div>
                <div className="review_card__content">
                  {frontmatter.segmentRepresentativeSpeech ||
                    'Génial ! Ces voitures garées dans le quartier sont en excellent état, une solution parfaite et économique pour mes déplacements.'}
                </div>
              </article>
            </div>
          </div>
        </div>
      )}

      <CarDisplay />
    </Layout>
  )
}

export default LandingTemplate

export const landingQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        segmentCategory
        segmentAroundExpression
        segmentLogoUrl
        drivyAddressSearchUrl
        segmentDrivyReferralUrl
        segmentRecommendation
        segmentBackgroundUrl
        segmentRepresentativePhotoUrl
        segmentRepresentativeName
        segmentRepresentativeRole
        segmentRepresentativeSpeech
      }
    }
  }
`
