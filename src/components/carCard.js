import React from 'react'

const CarCard = ({
  carName,
  carUrl,
  carImageUrl,
  carLocation,
  carYear,
  carRating,
  carRatingsCount,
  carPrice,
}) => (
  <a className="text-decoration-none" href={carUrl} target="drivy">
    <article className="car_card">
      <div
        className="car_card__header"
        style={{
          backgroundImage: `url('${carImageUrl})`,
        }}
      />
      <div className="car_card__body">
        <div className="car_card__content">
          <div className="car_card__title">{carName}</div>
          <ul className="car_card__specs">
            <li>{carLocation}</li>
            <li>{carYear}</li>
          </ul>
          <span className="car_card__ratings">
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <i class="fas fa-star" />
            <span className="car_card__ratings_count">{carRatingsCount}</span>
          </span>
        </div>
        <div className="car_card__price">
          <div className="card_card__price_value">{carPrice}</div>
          <div className="card_card__price_label">/ jour</div>
        </div>
      </div>
    </article>
  </a>
)

export default CarCard
