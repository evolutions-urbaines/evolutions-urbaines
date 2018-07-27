import React, { Component } from 'react'
import URLSearchParams from 'url-search-params'

import moment from '../vendor/moment'

import LandingLayout from '../components/landingLayout'

class CoolworkingPage extends Component {
  constructor(props) {
    super(props)

    const drivyParams =
      'instant_bookable=yes&seats_min=5&age_max=5&address_source=google&only_responsive=true&country_scope=FR&latitude=44.8435491&car_types%5B%5D=city&longitude=-0.5734009999999898&car_options%5B%5D=air_conditioning&car_options%5B%5D=cruise_control&address=9+Rue+de+Cond%C3%A9%2C+Bordeaux%2C+France&city_display_name=Bordeaux&is_open%5B%5D=automatic'

    this.state = {
      address: '9 Rue de Condé, Bordeaux, France',
      drivyUrl: 'https://www.drivy.com/search',
      drivyParams,
      logoUrl:
        'https://www.coolworking.fr/wp-content/uploads/2013/03/logo-horizontal-fr-400x69.png',
      oneClickSearchData: this.getOneClickSearchData(new Date(2018, 8, 1)),
    }
  }

  componentDidMount() {
    this.setState({
      oneClickSearchData: this.getOneClickSearchData(new Date()),
    })
  }

  getOneClickSearchData(date = new Date()) {
    const momentDate = moment(date)
    const steps = [1, 2, 3]

    const halfDays = []

    steps.forEach(i => {
      const momentDateIsPM = momentDate.hours() > 11

      const momentCalculatedDate = momentDate
        .businessAdd(Math.trunc((i + momentDateIsPM) / 2))
        .add(12 * (i % 2) * !momentDateIsPM, 'hours')
        .subtract(12 * (i % 2) * momentDateIsPM, 'hours')

      const momentCalculatedDateIsPM = momentCalculatedDate.hours() > 11

      halfDays.push({
        dateParams: new URLSearchParams({
          start_date: momentCalculatedDate.format('YYYY-MM-DD'),
          start_time: momentCalculatedDateIsPM ? '14:00' : '08:00',
          end_date: momentCalculatedDate.format('YYYY-MM-DD'),
          end_time: momentCalculatedDateIsPM ? '18:00' : '12:00',
        }).toString(),
        linkText: momentCalculatedDate.calendar(null, {
          sameDay: '[Cet] a',
          nextDay: '[Demain] a',
          nextWeek: 'dddd Do a',
          sameElse: 'Do MMM a',
        }),
      })
    })

    const fullDays = []

    steps.forEach(i => {
      const momentCalculatedDate = momentDate.businessAdd(i)

      fullDays.push({
        dateParams: new URLSearchParams({
          start_date: momentCalculatedDate.format('YYYY-MM-DD'),
          start_time: '08:00',
          end_date: momentCalculatedDate.format('YYYY-MM-DD'),
          end_time: '20:00',
        }).toString(),
        linkText: momentCalculatedDate.calendar(null, {
          sameDay: "[Aujourd'hui]",
          nextDay: '[Demain]',
          nextWeek: 'dddd Do',
          sameElse: 'Do MMMM',
        }),
      })
    })

    return { halfDays, fullDays }
  }

  renderOneClickSearchButton({ dateParams, linkText }) {
    return (
      <a
        href={`${this.state.drivyUrl}?${this.state.drivyParams}&${dateParams}`}
        className="btn btn-warning"
        target="drivy"
      >
        {linkText}
      </a>
    )
  }

  render() {
    return (
      <LandingLayout pathname={this.props.location.pathname}>
        <div className="homepage_hero">
          <div className="background_shape">
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="2a83cea684bcc40aa6a733d3a9acf733aller_gradient_private2"
                  x1="0%"
                  x2="0%"
                  y1="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#00d9d9" />
                  <stop offset="100%" stopColor="#00d9d9" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="2a83cea684bcc40aa6a733d3a9acf733electrique_gradient_private2"
                  x1="0%"
                  x2="100%"
                  y1="0%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#d8ff00" />
                  <stop offset="100%" stopColor="#d8ff00" stopOpacity="0" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <polygon
                  fill="url(#2a83cea684bcc40aa6a733d3a9acf733aller_gradient_private2)"
                  points="0 10 3 10 0 1"
                />
                <polygon
                  fill="url(#2a83cea684bcc40aa6a733d3a9acf733electrique_gradient_private2)"
                  points="10 0 10 3 4 0"
                />
              </g>
            </svg>
          </div>
          <div className="container position-relative">
            <div className="mb-5">
              <h2 className="h1">
                Des voitures autour du Coolworking, prêtes à partir
              </h2>
              <h2 className="h3">Pour quelques heures ou quelques jours</h2>
            </div>

            <div className="mb-4">
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 col-lg-7 col-xl-6">
                  <div className="row text-center">
                    {this.state.oneClickSearchData.halfDays.map(halfDay => {
                      return (
                        <div className="col-12 col-lg-4">
                          {this.renderOneClickSearchButton(halfDay)}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-6">
                  <div className="h3 mb-0">
                    <span className="badge badge-light font-weight-normal">
                      à partir de 28 €
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 col-lg-7 col-xl-6">
                  <div className="row text-center">
                    {this.state.oneClickSearchData.fullDays.map(fullDay => {
                      return (
                        <div className="col-12 col-lg-4">
                          {this.renderOneClickSearchButton(fullDay)}
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-6">
                  <div className="h3 mb-0">
                    <span className="badge badge-light font-weight-normal">
                      à partir de 40 € avec 200 km inclus
                    </span>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row align-items-center">
                <div className="col-12 col-sm-6 col-lg-7 col-xl-6">
                  <div className="text-center">
                    <a
                      href={`${this.state.drivyUrl}?${this.state.urlParams}`}
                      className="btn btn-warning"
                      target="drivy"
                    >
                      Autres dates
                    </a>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-5 col-xl-6">
                  <div className="h3 mb-0">
                    <span className="badge badge-light font-weight-normal">
                      tarif dégressif
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="h5 font-weight-normal text-right">
              Voitures en autopartage proposées par Evolutions Urbaines sur la
              plateforme Drivy
            </p>
          </div>
        </div>
      </LandingLayout>
    )
  }
}

export default CoolworkingPage
