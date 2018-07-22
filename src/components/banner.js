import React from 'react'

const Banner = ({ children, backgroundImageUrl }) => (
  <div
    className="banner"
    style={{
      backgroundImage: `url(${backgroundImageUrl})`,
    }}
  >
    <div className="container pb-4 d-flex flex-column justify-content-center">
      {children}
    </div>
  </div>
)

export default Banner
