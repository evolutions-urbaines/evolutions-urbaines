import React from 'react'

import Layout from '../components/layout'

const LegalPage = ({ location }) => (
  <Layout {...{ location }}>
    <div className="container">
      <h1>Mentions légales</h1>

      <h2>Editeur du site</h2>
      <p>
        Le site evolutions-urbaines.fr est édité par Evolutions Urbaines,
        Société par Actions Simplifiée au capital de 10 000 €, immatriculée au
        RCS de Bordeaux sous le numéro 839 130 069, dont le siège social est
        situé 23 cours de Verdun, Bordeaux, France.
      </p>
      <p>Directeur de la publication : François Catuhe</p>

      <h2>Hébergeur</h2>
      <p>
        Ce site est hébergé auprès de{' '}
        <a href="https://www.netlify.com/">Netlify</a>.
      </p>
    </div>
  </Layout>
)

export default LegalPage
