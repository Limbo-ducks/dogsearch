import React from 'react'

import './ProfileCv.scss'

const ProfileCv = ({data}) => {
  return (
    <section className="content">
      <section className="content__cv">
        <h3 className="content__title">Acting Credits</h3>
          <article className="content__cv__acting">
            <h3>Film: , year</h3>
            <p>Role: </p>
            <p>Character: </p>
          </article>
        <h3 className="content__title">Non Acting Credits</h3>
        <h4 className="content__header">Film</h4>
          <article className="content__cv__acting">
            <h3>Film: , year</h3>
            <p>Role: </p>
          </article>
          <h4 className="content__header">Theatre</h4>
            <article className="content__cv__acting">
              <h3>Film: , year</h3>
              <p>Role: </p>
            </article>
          <h4 className="content__header">Others</h4>
            <article className="content__cv__acting">
              <h3>Film: , year</h3>
              <p>Role: </p>
            </article>
        <h3 className="content__title">Nominations</h3>
          <article className="content__cv__acting">
            <h3>Film: , year</h3>
            <p>Role: </p>
            <p>Won: </p>
          </article>
      </section>
    </section>
  )
}

export default ProfileCv
