import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../styles/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'

import Navigation from './navigation'
import Footer from './footer'

// import ogImage from '../images/ogImage.jpg';
// import ogImageSquare from '../images/ogImageSquare.jpg';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            name
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { name, title, description, keywords, siteUrl },
      },
    }) => (
      <>
        <Helmet
          htmlAttributes={{ lang: 'fr' }}
          titleTemplate={`${name} · %s`}
          defaultTitle={`${name} · ${title}`}
          meta={[
            {
              name: 'description',
              content: description,
            },
            { name: 'keywords', content: keywords },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: name },
            { property: 'og:url', content: siteUrl },
            {
              property: 'og:title',
              content: `${name} · ${title}`,
            },
            {
              property: 'og:description',
              content: description,
            },
            // { property: 'og:image', content: ogImageUrl },
            // { property: 'og:image:width', content: '2400' },
            // { property: 'og:image:height', content: '1260' },
            // { property: 'og:image', content: ogImageSquareUrl },
            // { property: 'og:image:width', content: '600' },
            // { property: 'og:image:height', content: '600' },
          ]}
        />

        <Navigation />

        <main>{children}</main>

        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
