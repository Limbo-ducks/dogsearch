import React from 'react'
import EducationCredits from './EducationCredits'
import FilmCredits from './FilmCredits'

import ProfileAttribute from './ProfileAttribute.jsx'

import './ProfileCvAttributes.scss'

import './ProfileCv.scss'

const ProfileCv = ({data}) => {

  return (
    <section className="content">
      <section className="content__cv">
        <FilmCredits data={data}/>
        <EducationCredits data={data} />
        <h3 className="content__title" id="skills">Skills</h3>
        <section className="content__cv__skills">
          <ProfileAttribute 
            data={[data.athleticEndeavors]} 
            label={['Athletic Endeavors']} 
            performance={true}
            unit={['']} 
            />

          <ProfileAttribute 
            data={[data.performance]} 
            label={['Performance']} 
            unit={['', '']} 
            performance={true}
            odd={true}/>

          <ProfileAttribute 
            data={[data.accent]} 
            label={['Accents']} 
            performance={true}
            unit={['']}/>

          <ProfileAttribute 
            data={[data.languages]} 
            label={['Languages']} 
            unit={['', '']} 
            performance={true}
            odd={true}/>

          <ProfileAttribute 
            data={[data.additionalSkills]} 
            label={['Additional Skills']} 
            performance={true}
            unit={['']}/>

          <ProfileAttribute 
            data={[data.professionYears]} 
            label={['Profession Years']} 
            unit={['']} 
            performance={true}
            odd={true}/>
        </section>
      </section>
    </section>
  )
}

export default ProfileCv
