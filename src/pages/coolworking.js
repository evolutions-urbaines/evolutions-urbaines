import React from 'react'

import LandingLayout from '../components/landingLayout'
import LandingHero from '../components/landingHero'
import OneClickSearch from '../components/oneClickSearch'

const CoolworkingPage = ({
  segmentName = 'Coolworking',
  segmentAroundExpression = 'du Coolworking',
  segmentLogoUrl = 'https://www.coolworking.fr/wp-content/uploads/2013/03/logo-horizontal-fr-400x69.png',
  address = '9 Rue de Condé, Bordeaux, France',
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
          <OneClickSearch address={address} />
        </div>

        <p className="h5 font-weight-normal text-right">
          Voitures en autopartage proposées par Evolutions Urbaines sur la
          plateforme Drivy
        </p>
      </div>
    </LandingHero>
  </LandingLayout>
)

export default CoolworkingPage
