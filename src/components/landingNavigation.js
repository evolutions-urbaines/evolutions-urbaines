import React, { Component } from 'react'

const LandingNavigation = () => (
  <div className="py-2">
    <div className="container d-flex align-items-center justify-content-between">
      <div className="d-flex align-items-center children-mx-3">
        <h4 className="mb-0">
          Evolutions<br />Urbaines
        </h4>
        <span className="h5 mb-0">+</span>
        <h4 className="mb-0">Drivy</h4>
      </div>
      <img
        src="https://www.coolworking.fr/wp-content/uploads/2013/03/logo-horizontal-fr-400x69.png"
        alt="Coolworking"
      />
      <div className="d-flex align-items-center children-mx-3">
        <span>Nouveau ?</span>
        <a
          href="https://www.drivy.com/r/2039832-027"
          target="drivy"
          className="btn btn-primary"
        >
          10€ offerts
        </a>
      </div>
    </div>
  </div>
)

export default LandingNavigation
