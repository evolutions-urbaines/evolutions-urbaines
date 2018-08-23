import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

const CustomerSuccesPage = ({ data: { allReviewsYaml }, location }) => (
  <Layout {...{ location }}>
    <h1>La satisfaction client</h1>

    <a href="https://www.drivy.com/users/2039832" target="drivy">
      Profil Drivy
    </a>

    {allReviewsYaml.edges[0].node.fields.cars.map(car => (
      <div key={car.id}>
        <h3>{car.title}</h3>

        {car.reviews.map(({ comment, display_created_at, user }, index) => (
          <div
            className="row align-items-center my-4"
            key={`${car.id}_${index}`}
          >
            <div className="col-2 text-center">
              <img src={user.avatar.thumb_url} alt={user.public_name} />
            </div>
            <div className="col-10">
              <div className="d-flex justify-content-between">
                <div>{user.public_name}</div>
                <div>{display_created_at}</div>
              </div>
              {comment}
            </div>
          </div>
        ))}
      </div>
    ))}
  </Layout>
)

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
  }
`
