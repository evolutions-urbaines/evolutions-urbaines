import React from 'react'

import CarCard from '../components/carCard'

const CarDisplay = () => (
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
            carRatingsCount="11"
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
)

export default CarDisplay
