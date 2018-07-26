import React, { Component } from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import onClickOutside from 'react-onclickoutside'
import { Collapse, Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap'

class Navigation extends Component {
  state = {
    isOpen: false,
    isTop: true,
  }

  componentDidMount() {
    document.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll)
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

  handleScroll = () => {
    const isTop = window.scrollY < 30
    if (isTop !== this.state.isTop) {
      this.setState({ isTop })
    }
  }

  classes = () =>
    classNames('navigation', 'fixed-top', {
      'navigation-simple': ['/coolworking', '/coolworking/'].includes(
        this.props.pathname
      ),
      'navigation-top': this.state.isTop,
      'navigation-opened': this.state.isOpen,
    })

  render() {
    return (
      <div className={this.classes()}>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/" onClick={this.closeNavbar}>
              Evolutions<br />Urbaines
            </NavbarBrand>
            <button className="navbar-toggler" onClick={this.toggleNavbar}>
              <span className="navbar-toggler-icon" />
            </button>
            <Collapse
              isOpen={this.state.isOpen}
              onClick={this.closeNavbar}
              navbar
            >
              <Nav navbar>
                <NavItem className="px-3">
                  <Link to="/" className="nav-link" activeClassName="active">
                    Accueil
                  </Link>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    )
  }
}
export default onClickOutside(Navigation)
