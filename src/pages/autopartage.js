import React from 'react'
import Link from 'gatsby-link'

import Layout from '../components/layout'

const CarSharingPage = ({ location }) => (
  <Layout className="bg-steel pt-4" {...{ location }}>
    <h1>Notre vision de l'autopartage</h1>

    <p>
      Passionnés par les nouvelles mobilités et l'autopartage, nous vous
      proposons un service construit autour de 7 principes fondamentaux.
    </p>

    <h2>
      <span className="font-weight-normal">Les </span>7 marqueurs de Qualité{' '}
      <span className="font-weight-normal">pour un autopartage réussi</span>
    </h2>

    <div className="row my-4">
      <div className="offset-md-2 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Une relation humaine, un service d'excellence</h3>
          <p className="mb-0">
            Nous sommes persuadés que les services du futur doivent répondre à
            un niveau d'exigence qui ne cesse d'augmenter, tout en conservant{' '}
            <Link to="/satisfaction-client" className="text-secondary">
              des relations humaines sincères
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="offset-md-3 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Des voitures neuves</h3>
          <p className="mb-0">
            Nos voitures neuves sont renouvellées au bout de 2 ans. Elles sont
            donc tout le temps couvertes par la période de garantie et
            d'assistance du constructeur. La fiabilité est alors maximale, vous
            êtes certain d'atteindre votre destination dans les conditions
            optimales.
          </p>
        </div>
      </div>

      <div className="offset-md-2 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Disponibles 24h/24 et 7j/7, en libre service</h3>
          <p className="mb-0">
            Vous êtes entièrement autonome pour la prise en charge de votre
            voiture. La voiture en autopartage est toujours synonyme de liberté.
          </p>
        </div>
      </div>

      <div className="offset-md-3 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Un stationnement dédié, en cœur de ville</h3>
          <p className="mb-0">
            Dans un parking privé ou sur des places dédiées dans la rue, vous
            êtes assuré de pouvoir vous garer en toute simplicité à votre
            retour. Nos voitures sont stationnées en plein centre ville, au plus
            proche de vous.
          </p>
        </div>
      </div>

      <div className="offset-md-2 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Le respect des autres utilisateurs et de la voiture</h3>
          <p className="mb-0">
            Pendant la prise en charge, considérez la voiture comme la votre,
            mettez-vous à l'aise et prenez en soin ! Au retour, pensez aux
            autres utilisateurs et rendez la voiture comme vous aimez la
            retrouver.
          </p>
        </div>
      </div>

      <div className="offset-md-3 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Un confort de conduite et de voyage</h3>
          <p className="mb-0">
            Nous choisissons les voitures considérées comme des valeures sûres,
            les plus vendues en France et faciles à conduire. Ells sont toutes
            équipées des moteurs et des options nécessaires au confort de
            conduite optimal, et les passagers sont également bien soignés.
          </p>
        </div>
      </div>

      <div className="offset-md-2 col-md-7">
        <div className="bg-white rounded shadow p-4 mb-4">
          <h3>Une propreté et une hygiène irréprochables</h3>
          <p className="mb-0">
            Les voitures ayant une utilisation régulière et soutenue, nous
            accordons beaucoup d'importance au maintien du niveau de propreté et
            d'hygiène de l'habitacle. Nos équipes interviennent toutes les
            semaines pour le nettoyage et l'entretien des voitures.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default CarSharingPage
