import React from 'react'

import LandingLayout from '../components/landingLayout'
import LandingHero from '../components/landingHero'
import OneClickSearch from '../components/oneClickSearch'

const CoolworkingPage = ({
  segmentName = 'Coolworking',
  segmentAroundExpression = 'du Coolworking',
  segmentLogoUrl = 'https://www.coolworking.fr/wp-content/uploads/2013/03/logo-horizontal-fr-400x69.png',
  drivyAddressSearchUrl = 'https://www.drivy.com/search?address_source=google&only_responsive=true&country_scope=FR&latitude=44.8435491&longitude=-0.57340099999999&page=1&address=9+Rue+de+Cond%C3%A9%2C+Bordeaux%2C+France&city_display_name=Bordeaux',
}) => (
  <LandingLayout segmentName={segmentName} segmentLogoUrl={segmentLogoUrl}>
    <LandingHero>
      <div className="container position-relative">
        <div className="mb-5">
          <h2 className="h1">
            Des voitures autour {segmentAroundExpression}, prêtes à partir
          </h2>
          <h2 className="h3">Pour quelques heures ou quelques jours</h2>
        </div>

        <div className="mb-4">
          <OneClickSearch drivyAddressSearchUrl={drivyAddressSearchUrl} />
        </div>

        <p className="h5 font-weight-normal text-center text-lg-right">
          Voitures en autopartage proposées par Evolutions Urbaines sur la
          plateforme Drivy
        </p>
      </div>
    </LandingHero>
    <div className="container">
      <div className="row my-3 align-items-stretch text-center font-weight-bold h5">
        <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center">
          3 × Renault Clio neuve aux Quinconces
        </div>
        <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
          Libre-service avec ouverture par smartphone
        </div>
        <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
          Assurance et assistance 24h/24 incluses
        </div>
      </div>
    </div>
  </LandingLayout>
)

export default CoolworkingPage
