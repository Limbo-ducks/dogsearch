import React from 'react'
import ProfileAttribute from './ProfileAttribute.jsx'

import './ProfileAttributes.scss'

const calculateHeight = height => {
  const feet = Math.floor(height / 12)
  return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
}

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const ProfileAttributes = ({data}) => {
  const mrsm = data.measurements;
  return (
    <section className="content__attributes">
      <article className="content__attributes__list">

      <article className={`content__attributes__list__row`}>
          <article>
            <p><b>Body</b></p>
          </article>
        </article>

        <ProfileAttribute 
          data={[upCaseFirst(data.hairColor), upCaseFirst(data.hairLength)]} 
          label={['Hair color', 'Hair Length']} 
          unit={['', '']} />

        <ProfileAttribute 
          data={[calculateHeight(mrsm.height), mrsm.weight]} 
          label={['Height', 'Weight']} 
          unit={['', 'lbs']} 
          odd={true}/>

        <ProfileAttribute 
          data={[mrsm.bodyType, data.bodyModifications]} 
          label={['Body type', 'Body modifications']} 
          unit={['', '']} />


        <ProfileAttribute 
          data={[mrsm.shirtSize.toUpperCase(), mrsm.sleeveLength]} 
          label={['Shirt size', 'Sleeve Length']} 
          unit={['', '"']}
          odd={true}/>

        <ProfileAttribute 
          data={[mrsm.jacketLength.toUpperCase(), mrsm.jacketChest]} 
          label={['Jacket Length', 'Jacket Chest']} 
          unit={['"', '"']} />
          
        <ProfileAttribute 
          data={[mrsm.inseam, mrsm.waist]} 
          label={['Inseam', 'Waist']} 
          unit={['', '"']}
          odd={true}/>

        <ProfileAttribute 
          data={[mrsm.shoeLength, mrsm.shoeWidth.toUpperCase()]} 
          label={['Shoe Length', 'Shoe Width']} 
          unit={['"', '']} />

        <ProfileAttribute 
          data={[mrsm.gloves.toUpperCase(), mrsm.hat]} 
          label={['Gloves', 'Hat']} 
          unit={['', '"']}
          odd={true}/>

        <ProfileAttribute 
          data={[mrsm.neck, ' ']} 
          label={['Neck', 'Notes']} 
          unit={['"', '']} />

      <article className={`content__attributes__list__row content__attributes__list__row--odd`}>
        <article>
          <p><b>Performance</b></p>
        </article>
      </article>

        <ProfileAttribute 
          data={[data.athleticEndeavors]} 
          label={['Athletic Endeavors']} 
          unit={['']} 
          />

        <ProfileAttribute 
          data={[data.performance]} 
          label={['Performance']} 
          unit={['', '']} 
          odd={true}/>

        <ProfileAttribute 
          data={[data.accent]} 
          label={['Accents']} 
          unit={['']}/>

        <ProfileAttribute 
          data={[data.languages]} 
          label={['Languages']} 
          unit={['', '']} 
          odd={true}/>

        <ProfileAttribute 
          data={[data.additionalSkills]} 
          label={['Additional Skills']} 
          unit={['']}/>

        <ProfileAttribute 
          data={[data.professionYears]} 
          label={['Profession Years']} 
          unit={['']} 
          odd={true}/>

        


        

      </article>
    </section>
  )
}

export default ProfileAttributes
