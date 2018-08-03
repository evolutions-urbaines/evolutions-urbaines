import React from 'react'

const USP = ({ segmentCategory }) => {
  const mainUSP = (category => {
    switch (category) {
      case 'business':
        return 'Voitures neuves, à votre image en déplacement professionnel'

      default:
        return "Voitures neuves, prenez la route l'esprit tranquille"
    }
  })(segmentCategory)

  return (
    <div className="shadow-steel">
      <div className="container">
        <div className="row py-3 align-items-stretch text-center font-weight-bold h5 mb-0">
          <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center">
            Libre-service avec ouverture par smartphone
          </div>
          <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
            {mainUSP}
          </div>
          <div className="col-12 col-md py-1 d-flex justify-content-center align-items-center border-md-left">
            Assurance et assistance 24h/24 incluses
          </div>
        </div>
      </div>
    </div>
  )
}

export default USP
