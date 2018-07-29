import React, { Component } from 'react'
import { URL, URLSearchParams } from 'whatwg-url'

import moment from '../vendor/moment'

class OneClickSearch extends Component {
  state = {
    drivySearchUrl: 'https://www.drivy.com/search',
    drivySearchParams: this.getDrivySearchParams(),
    oneClickSearchData: this.getOneClickSearchData(
      moment()
        .add(1, 'month')
        .endOf('month')
    ),
  }

  componentDidMount() {
    this.setState({
      oneClickSearchData: this.getOneClickSearchData(),
    })
  }

  getDrivySearchParams() {
    const url = new URL(this.props.drivyAddressSearchUrl)

    const drivySearchParams = new URLSearchParams({
      address: url.searchParams.get('address'),
      latitude: url.searchParams.get('latitude'),
      longitude: url.searchParams.get('longitude'),
      city_display_name: url.searchParams.get('city_display_name'),
      country_scope: url.searchParams.get('country_scope'),
      address_source: url.searchParams.get('address_source') || 'google',
      instant_bookable: 'yes',
      'is_open[]': 'automatic',
      'car_types[]': 'city',
      only_responsive: true,
      seats_min: 5,
      age_max: 5,
      'car_options[]': 'air_conditioning',
    })
    drivySearchParams.append('car_options[]', 'cruise_control')

    return drivySearchParams
  }

  getOneClickSearchData(momentDate = moment()) {
    const steps = [1, 2, 3]

    const momentDateIsPM = momentDate.hours() > 11
    const halfDays = steps.map(i => {
      const momentCalculatedDate = momentDate
        .businessAdd(Math.trunc((i + momentDateIsPM) / 2))
        .add(12 * (i % 2) * !momentDateIsPM, 'hours')
        .subtract(12 * (i % 2) * momentDateIsPM, 'hours')
      const momentCalculatedDateIsPM = momentCalculatedDate.hours() > 11

      return {
        dateParams: new URLSearchParams({
          start_date: momentCalculatedDate.format('YYYY-MM-DD'),
          start_time: momentCalculatedDateIsPM ? '14:00' : '08:00',
          end_date: momentCalculatedDate.format('YYYY-MM-DD'),
          end_time: momentCalculatedDateIsPM ? '18:00' : '12:00',
        }).toString(),
        dateDisplay: momentCalculatedDate.calendar(null, {
          sameDay: '[Cet] a',
          nextDay: '[Demain] a',
          nextWeek: 'dddd Do a',
          sameElse: 'Do MMM a',
        }),
      }
    })

    const fullDays = steps.map(i => {
      const momentCalculatedDate = momentDate.businessAdd(i)

      return {
        dateParams: new URLSearchParams({
          start_date: momentCalculatedDate.format('YYYY-MM-DD'),
          start_time: '08:00',
          end_date: momentCalculatedDate.format('YYYY-MM-DD'),
          end_time: '20:00',
        }).toString(),
        dateDisplay: momentCalculatedDate.calendar(null, {
          sameDay: "[Aujourd'hui]",
          nextDay: '[Demain]',
          nextWeek: 'dddd Do',
          sameElse: 'Do MMMM',
        }),
      }
    })

    return { halfDays, fullDays }
  }

  renderOneClickSearchButton({ dateParams, dateDisplay }) {
    return (
      <a
        href={`${this.state.drivySearchUrl}?${
          this.state.drivySearchParams
        }&${dateParams}`}
        className="btn btn-warning text-capitalize-one"
        target="drivy"
      >
        {dateDisplay}
      </a>
    )
  }

  renderOneClickSearchSection(oneClickSearchDays) {
    return oneClickSearchDays.map(day => {
      return (
        <div key={day.dateDisplay} className="col-12 col-lg-4">
          {this.renderOneClickSearchButton(day)}
        </div>
      )
    })
  }

  render() {
    return (
      <>
        <div className="row align-items-center">
          <div className="col-12 col-sm-6 col-lg-7 col-xl-6">
            <div className="row text-center">
              {this.renderOneClickSearchSection(
                this.state.oneClickSearchData.halfDays
              )}
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
              {this.renderOneClickSearchSection(
                this.state.oneClickSearchData.fullDays
              )}
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
                href={`${this.state.drivySearchUrl}?${
                  this.state.drivySearchParams
                }`}
                className="btn btn-warning text-capitalize-one"
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
      </>
    )
  }
}
export default OneClickSearch
