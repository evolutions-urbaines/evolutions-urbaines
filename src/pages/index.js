import React from 'react'

// import Layout from '../components/layout'
// import Banner from '../components/banner'

import LandingLayout from '../components/landingLayout'
import Hero from '../components/hero'
import OneClickSearch from '../components/oneClickSearch'
import CarCard from '../components/carCard'

const IndexPage = ({ location }) => (
  // <Layout pathname={props.location.pathname}>
  //   <Banner backgroundImageUrl="http://res.cloudinary.com/evolutions-urbaines/image/upload/c_fill,h_1280,w_1920/v1532259720/IMG_7681.jpg">
  //     <h1>“ Autopartage à Bordeaux ”</h1>
  //     <p className="display-4">Evolutions Urbaines</p>
  //   </Banner>
  // </Layout>
  <LandingLayout
    pathname={location.pathname}
    locationsegmentName="Evolutions Urbaines"
  >
    <Hero>
      <div className="container position-relative">
        <div className="mb-5">
          <h2 className="h1">Des voitures autour de vous, prêtes à partir</h2>
          <h2 className="h3">Pour quelques heures ou quelques jours</h2>
        </div>

        <div className="mb-4">
          <OneClickSearch drivyAddressSearchUrl="https://www.drivy.com/search?address_source=google&only_responsive=true&country_scope=FR&latitude=44.8439848&longitude=-0.573847600000022&page=1&address=Quinconces%2C+Bordeaux%2C+France&city_display_name=Bordeaux" />
        </div>

        <p className="h5 font-weight-normal text-center text-lg-right">
          Voitures en autopartage proposées par Evolutions Urbaines sur la
          plateforme Drivy
        </p>
      </div>
    </Hero>

    <div className="shadow-steel">
      <div className="container">
        <div className="row py-3 align-items-stretch text-center font-weight-bold h5 mb-0">
          <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center">
            Libre-service avec ouverture par smartphone
          </div>
          <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
            Voitures neuves, déplacez vous l'esprit tranquille
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
              carRatingsCount="8"
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
              carRatingsCount="6"
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

export default IndexPage
