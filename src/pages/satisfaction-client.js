import React from 'react'
import { graphql } from 'gatsby'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const CustomerSuccesPage = ({
  data: { allReviewsYaml, carsYaml },
  location,
}) => {
  const owner = carsYaml.fields.owner
  return (
    <Layout skipContainer="true" {...{ location }}>
      <div className="bg-steel py-4">
        <div className="container">
          <h1>Une relation humaine, un service d'excellence</h1>

          <p>
            Votre satisfaction fait partie de nos{' '}
            <Link to="/autopartage" className="text-secondary">
              marqueurs de qualité
            </Link>
            .
          </p>

          <p>C'est vous qui en parlez le mieux !</p>

          <h2 className="h4 my-4">Avis clients sur la plateforme Drivy</h2>

          <div className="row">
            <div className="col-12 col-md-4 mb-5">
              <div className="bg-white rounded shadow">
                <div className="user_card_infos">
                  <img
                    className="user_card_picture"
                    src={owner.avatar.thumb_url}
                    alt={owner.public_name}
                  />
                  <div className="user_card_name">
                    <div className="mb-2">François</div>
                    Evolutions Urbaines
                  </div>
                </div>
                <div className="p-3">
                  <div className="row text-center">
                    <div className="col-lg-5 offset-lg-1 col-6">
                      <div className="h4 mb-0">
                        <i className="fas fa-key fa-xs text-secondary" />{' '}
                        {owner.stats.owner_ended_rentals_count}
                      </div>
                      <div className="text-secondary">locations</div>
                    </div>
                    <div className="col-lg-5 col-6">
                      <div className="h4 mb-0">
                        <i className="fas fa-star fa-xs text-secondary" />{' '}
                        {owner.stats.ratings_average / 2}
                        /5
                      </div>
                      <div className="text-secondary">
                        {owner.stats.ratings_count} évaluations
                      </div>
                    </div>
                  </div>
                  <blockquote className="my-4">
                    <p>{owner.about_me}</p>
                  </blockquote>

                  <a
                    href="https://www.drivy.com/search?address=Quinconces%2C+Bordeaux%2C+France&latitude=44.8439848&longitude=-0.573847600000022&city_display_name=Bordeaux&country_scope=FR&address_source=google&instant_bookable=yes&is_open%5B%5D=automatic&car_types%5B%5D=city&only_responsive=true&seats_min=5&age_max=5&car_options%5B%5D=air_conditioning&car_options%5B%5D=cruise_control"
                    className="btn btn-block btn-warning text-capitalize-one"
                    target="drivy"
                  >
                    Rechercher sur Drivy
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-8">
              <div className="bg-white rounded shadow pt-5 px-5">
                {allReviewsYaml.edges[0].node.fields.cars.map(car => (
                  <div className="pb-5" key={car.id}>
                    <h4 className="mb-5">{car.title}</h4>

                    {car.reviews.map(
                      ({ comment, display_created_at, user }, index) => (
                        <div
                          className="rental_review"
                          key={`${car.id}_${index}`}
                        >
                          <img
                            className="rental_review__thumb"
                            src={user.avatar.thumb_url}
                            alt={user.public_name}
                          />
                          <div className="rental_review__content">
                            <div className="rental_review__info">
                              <div className="rental_review__title">
                                {user.public_name}
                              </div>
                              <div className="rental_review__date">
                                {display_created_at}
                              </div>
                            </div>
                            <div className="rental_review__text">
                              <p>{comment}</p>
                            </div>
                            <div className="mb-3">
                              {new Array(5).fill(null).map(() => (
                                <i className="fas fa-star text-info" />
                              ))}
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CustomerSuccesPage

export const ReviewsQuery = graphql`
  query {
    allReviewsYaml {
      edges {
        node {
          id
          fields {
            cars {
              id
              title
              reviews {
                comment
                display_created_at
                user {
                  public_name
                  avatar {
                    thumb_url
                  }
                }
              }
            }
          }
        }
      }
    }
    carsYaml {
      fields {
        owner {
          public_name
          about_me
          avatar {
            thumb_url
          }
          stats {
            ratings_average
            ratings_count
            owner_ended_rentals_count
            driver_ended_rentals_count
          }
        }
      }
    }
  }
`
