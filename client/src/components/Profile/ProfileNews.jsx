import React from 'react'

import './ProfileNews.scss'
import ProfilePost from './ProfilePost'

const ProfileNews = ({data}) => {
  return (
    <section className="content__news">
      <article className="content__news__header">
      </article>
      <article className="content__news__content">
        <ProfilePost data={data}/>
        <ProfilePost data={data}/>
      </article>
      <article className="content__news__footer">

      </article>
    </section>
  )
}

export default ProfileNews
