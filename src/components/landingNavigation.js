import React from 'react'

const LandingNavigation = ({
  segmentName,
  segmentLogoUrl,
  segmentDrivyReferralUrl,
}) => (
  <div className="landing-navigation py-2">
    <div className="container">
      <div className="row">
        <div className="col d-flex align-items-center children-mx-3">
          <h4 className="mb-0">
            Evolutions
            <br />
            Urbaines
          </h4>
          <span className="h5 mb-0 d-none d-lg-block">+</span>
          <h4 className="mb-0 d-none d-lg-block">Drivy</h4>
        </div>

        {typeof segmentLogoUrl !== 'undefined' &&
          segmentLogoUrl !== null && (
            <div className="col d-none d-md-flex justify-content-center align-items-center">
              <img
                src={segmentLogoUrl}
                alt={segmentName}
                className="max-height-50px"
              />
            </div>
          )}

        <div className="col d-flex justify-content-end align-items-center children-mx-3">
          <span className="d-none d-lg-block">Nouveau ?</span>
          <a
            href={
              (typeof segmentDrivyReferralUrl !== 'undefined' &&
                segmentDrivyReferralUrl !== null &&
                segmentDrivyReferralUrl) ||
              'https://www.drivy.com/r/2039832-027'
            }
            target="drivy"
            className="btn btn-primary"
          >
            10€ offerts
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default LandingNavigation
