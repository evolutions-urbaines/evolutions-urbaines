import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import CarCard from '../components/carCard'

const CarDisplay = () => (
  <StaticQuery
    query={graphql`
      query CarQuery {
        allCarsYaml {
          edges {
            node {
              id
              name
              location
              year
              price
              fields {
                url
                thumbUrl
                city
                stats {
                  ratings_average
                  ratings_count
                }
              }
            }
          }
        }
      }
    `}
    render={({ allCarsYaml }) => (
      <div className="bg-steel">
        <div className="container py-5">
          <h3>3 Renault Clio neuves aux Quinconces</h3>
          <p>Evolutions Urbaines vous les propose sur la plateforme Drivy !</p>

          <div className="row">
            {allCarsYaml.edges.map(
              ({
                node: {
                  id,
                  name,
                  location,
                  year,
                  price,
                  fields: {
                    url,
                    thumbUrl,
                    city,
                    stats: { ratings_average, ratings_count },
                  },
                },
              }) => (
                <div className="col-12 col-md-6 col-lg-4 py-1" key={id}>
                  <CarCard
                    name={name}
                    url={url}
                    thumbUrl={thumbUrl}
                    location={location || city}
                    year={year}
                    ratingsAverage={ratings_average}
                    ratingsCount={ratings_count}
                    price={price}
                  />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )}
  />
)
export default CarDisplay
