import React, { Component } from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'
import { Collapse } from 'reactstrap'

class Navigation extends Component {
  state = {
    isOpen: false,
  }

  toggleNavbar = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  closeNavbar = () => {
    this.setState({ isOpen: false })
  }

  handleClickOutside = this.closeNavbar

  classes = () =>
    classNames('navigation', 'sticky-top', {
      'navigation-opened': this.state.isOpen,
    })

  render() {
    return (
      <div className={this.classes()}>
        <nav className="navbar navbar-expand-md navbar-light bg-white">
          <div className="container">
            <Link to="/" className="navbar-brand">
              <h4 className="mb-0">Evolutions Urbaines</h4>
            </Link>
            <button className="navbar-toggler" onClick={this.toggleNavbar}>
              <span className="navbar-toggler-icon" />
            </button>
            <Collapse
              isOpen={this.state.isOpen}
              onClick={this.closeNavbar}
              navbar
            >
              <ul className="navbar-nav mr-auto">
                {/* <li className="nav-item">
                  <Link
                    to="/autopartage"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Autopartage
                  </Link>
                </li> */}
              </ul>

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
            </Collapse>
          </div>
        </nav>
      </div>
    )
  }
}
export default onClickOutside(Navigation)
