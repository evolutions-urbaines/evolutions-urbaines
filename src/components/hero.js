import React from 'react'

import backgroundBusiness from '../images/backgroundBusiness.jpg'
import backgroundLeisure from '../images/backgroundLeisure.jpg'

const Hero = ({ children, segmentCategory }) => {
  const backgroundImageUrl = (category => {
    switch (category) {
      case 'business':
        return backgroundBusiness
      default:
        return backgroundLeisure
    }
  })(segmentCategory)

  return (
    <div
      className="hero"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="background-shape">
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
      {children}
    </div>
  )
}

export default Hero
