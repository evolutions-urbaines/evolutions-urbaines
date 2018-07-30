import React from 'react'
import { graphql } from 'gatsby'

import LandingLayout from '../components/landingLayout'
import LandingHero from '../components/landingHero'
import OneClickSearch from '../components/oneClickSearch'
import CarCard from '../components/carCard'

const LandingTemplate = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <LandingLayout
      segmentName={frontmatter.segmentName}
      segmentLogoUrl={frontmatter.segmentLogoUrl}
    >
      <LandingHero>
        <div className="container position-relative">
          <div className="mb-5">
            <h2 className="h1">
              Des voitures autour {frontmatter.segmentAroundExpression}, prêtes
              à partir
            </h2>
            <h2 className="h3">Pour quelques heures ou quelques jours</h2>
          </div>

          <div className="mb-4">
            <OneClickSearch
              drivyAddressSearchUrl={frontmatter.drivyAddressSearchUrl}
            />
          </div>

          <p className="h5 font-weight-normal text-center text-lg-right">
            Voitures en autopartage proposées par Evolutions Urbaines sur la
            plateforme Drivy
          </p>
        </div>
      </LandingHero>

      <div className="shadow-steel">
        <div className="container">
          <div className="row py-3 align-items-stretch text-center font-weight-bold h5 mb-0">
            <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center">
              Libre-service avec ouverture par smartphone
            </div>
            <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
              Voitures neuves, à votre image pour vos déplacements
              professionnels
            </div>
            <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
              Assurance et assistance 24h/24 incluses
            </div>
          </div>
        </div>
      </div>

      <div className="bg-steel">
        <div className="container py-5">
          <h3>3 Renault Clio neuves aux Quinconces</h3>
          <p>Evolutions Urbaines vous les propose sur la plateforme Drivy !</p>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 py-1">
              <CarCard
                carName="Renault Clio neuve 315DC"
                carUrl="https://www.drivy.com/location-voiture/bordeaux/renault-clio-350543"
                carImageUrl="https://drivy.imgix.net/uploads/originals/0bf2abb44b8c432c1b86d95423c0974b.jpeg?auto=format%2Cenhance%2Ccompress&dpr=1&fit=crop&h=210&w=410"
                carLocation="Bordeaux Quinconces"
                carYear="2018"
                carRating="5"
                carRatingsCount="7"
                carPrice="40"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 py-1">
              <CarCard
                carName="Renault Clio neuve 86DD"
                carUrl="https://www.drivy.com/location-voiture/bordeaux/renault-clio-350554"
                carImageUrl="https://drivy.imgix.net/uploads/originals/339a636296b59d4247c0aae5db8c9cb8.jpeg?auto=format%2Cenhance%2Ccompress&dpr=1&fit=crop&h=210&w=410"
                carLocation="Bordeaux Quinconces"
                carYear="2018"
                carRating="5"
                carRatingsCount="4"
                carPrice="40"
              />
            </div>

            <div className="col-12 col-md-6 col-lg-4 py-1">
              <CarCard
                carName="Renault Clio neuve 77DD"
                carUrl="https://www.drivy.com/location-voiture/bordeaux/renault-clio-350552"
                carImageUrl="https://drivy.imgix.net/uploads/originals/f9f49ddc056b74635ab5cca75d551e2c.jpeg?auto=format%2Cenhance%2Ccompress&dpr=1&fit=crop&h=210&w=410"
                carLocation="Bordeaux Quinconces"
                carYear="2018"
                carRating="5"
                carRatingsCount="7"
                carPrice="40"
              />
            </div>
          </div>
        </div>
      </div>
    </LandingLayout>
  )
}

export default LandingTemplate

export const landingQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        segmentName
        segmentAroundExpression
        segmentLogoUrl
        drivyAddressSearchUrl
      }
    }
  }
`
