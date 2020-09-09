import React from 'react'
import FilmCredit from './FilmCredit'
import FilmCredits from './FilmCredits'

import './ProfileCv.scss'

const ProfileCv = ({data}) => {

  return (
    <section className="content">
      <section className="content__cv">
        <FilmCredits data={data}/>
      </section>
    </section>
  )
}

export default ProfileCv
