import React from 'react'

import './ProfileAttributes.scss'

const calculateHeight = height => {
  const feet = Math.floor(height / 12)
  return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
}

const ProfileAttributes = ({data}) => {
  return (
    <section className="content__attributes">
      <article className="content__attributes__list">
        <article className="content__attributes__list__row content__attributes__list__row--odd">
          <article>
            <p>Height: {calculateHeight(data.measurements.height)}</p>
          </article>
          <article>
            <p>Weight: {data.measurements.weight}lbs</p>
          </article>
        </article>
        <article className="content__attributes__list__row">
        <article>
            <p>Height: 165cm</p>
          </article>
          <article>
            <p>Weight: 56kg</p>
          </article>
        </article>
        <article className="content__attributes__list__row content__attributes__list__row--odd">
        <article>
            <p>Height: 165cm</p>
          </article>
          <article>
            <p>Weight: 56kg</p>
          </article>
        </article>
        <article className="content__attributes__list__row">
        <article>
            <p>Height: 165cm</p>
          </article>
          <article>
            <p>Weight: 56kg</p>
          </article>
        </article>
      </article>
    </section>
  )
}

export default ProfileAttributes
