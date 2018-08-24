import React from 'react'
import Link from 'gatsby-link'

const Footer = () => (
  <footer className="navbar navbar-expand-md navbar-dark bg-dark text-center">
    <div className="container justify-content-center justify-content-sm-between">
      <div className="navbar-text text-nowrap">© Evolutions Urbaines 2018</div>

      <div className="navbar-nav align-items-center">
        <div className="nav-item px-3">
          <Link to="/mentions-legales" className="nav-link">
            Mentions légales
          </Link>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://www.facebook.com/EvolutionsUrbaines"
            target="facebook"
          >
            <i className="fab fa-facebook fa-lg" />
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://www.drivy.com/users/2039832"
            target="drivy"
          >
            Profil Drivy
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
