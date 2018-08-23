import React from 'react'

const CarCard = ({
  name,
  url,
  thumbUrl,
  location,
  year,
  ratingsAverage,
  ratingsCount,
  price,
}) => (
  <a className="text-decoration-none" href={url} target="drivy">
    <article className="car_card">
      <div
        className="car_card__header"
        style={{
          backgroundImage: `url('${thumbUrl})`,
        }}
      />
      <div className="car_card__body">
        <div className="car_card__content">
          <div className="car_card__title">{name}</div>
          <ul className="car_card__specs">
            <li>{location}</li>
            <li>{year}</li>
          </ul>
          <span className="car_card__ratings">
            {new Array(Math.round(ratingsAverage / 2)).fill(null).map(() => (
              <i className="fas fa-star" />
            ))}
            {new Array(5 - Math.round(ratingsAverage / 2))
              .fill(null)
              .map(() => (
                <i className="fas fa-star empty" />
              ))}
            <span className="car_card__ratings_count">{ratingsCount}</span>
          </span>
        </div>
        <div className="car_card__price">
          <div className="card_card__price_value">{price}€</div>
          <div className="card_card__price_label">/ jour</div>
        </div>
      </div>
    </article>
  </a>
)

export default CarCard
