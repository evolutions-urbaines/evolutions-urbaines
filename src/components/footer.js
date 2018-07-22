import React from 'react'

const Footer = () => (
  <footer className="navbar navbar-expand-md navbar-dark bg-dark text-center">
    <div className="container justify-content-center justify-content-md-between">
      <div className="navbar-text text-nowrap">© Evolutions Urbaines 2018</div>
      <div className="navbar-nav align-items-center">
        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="https://www.drivy.com/users/2039832"
            target="drivy"
          >
            <i className="fas fa-car fa-lg" aria-hidden="true" />
          </a>
        </div>

        <div className="nav-item px-3">
          <a
            className="nav-link"
            href="mailto:Evolutions Urbaines <evolutions.urbaines@gmail.com>"
            target="_blank"
            rel="noreferrer noopener"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
