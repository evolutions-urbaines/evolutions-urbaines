import React from 'react'

import Layout from '../components/layout'
import Banner from '../components/banner'

const IndexPage = props => (
  <Layout pathname={props.location.pathname}>
    <Banner backgroundImageUrl="http://res.cloudinary.com/evolutions-urbaines/image/upload/c_fill,h_1280,w_1920/v1532259720/IMG_7681.jpg">
      <h1>“ Autopartage à Bordeaux ”</h1>
      <p className="display-4">Evolutions Urbaines</p>
    </Banner>
  </Layout>
)

export default IndexPage
