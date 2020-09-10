import React from 'react'
import EducationCredits from './EducationCredits'
import FilmCredits from './FilmCredits'

import './ProfileCv.scss'

const ProfileCv = ({data}) => {

  // console.log(data.education[0].school)

  return (
    <section className="content">
      <section className="content__cv">
        <FilmCredits data={data}/>
        <EducationCredits data={data} />
      </section>
    </section>
  )
}

export default ProfileCv
