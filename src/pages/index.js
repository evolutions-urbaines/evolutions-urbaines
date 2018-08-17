import React from 'react'

import Layout from '../components/layout'
import Hero from '../components/hero'
import OneClickSearch from '../components/oneClickSearch'
import USP from '../components/uSP'
import CarDisplay from '../components/carDisplay'

const IndexPage = ({ location }) => (
  <Layout {...{ location }} skipContainer="true">
    <Hero>
      <div className="container position-relative">
        <div className="mb-5">
          <h2 className="h1">Des voitures autour de vous, prêtes à partir</h2>
          <h2 className="h3">Pour quelques heures ou quelques jours</h2>
        </div>

        <div className="mb-5">
          <OneClickSearch drivyAddressSearchUrl="https://www.drivy.com/search?address_source=google&only_responsive=true&country_scope=FR&latitude=44.8439848&longitude=-0.573847600000022&page=1&address=Quinconces%2C+Bordeaux%2C+France&city_display_name=Bordeaux" />
        </div>

        <p className="h5 font-weight-normal text-center text-lg-right">
          Voitures en autopartage proposées par Evolutions Urbaines sur la
          plateforme Drivy
        </p>
      </div>
    </Hero>

    <USP />

    <CarDisplay />
  </Layout>
)

export default IndexPage
