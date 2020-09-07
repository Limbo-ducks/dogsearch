import React from 'react'

import './ProfileNews.scss'
import ProfilePost from './ProfilePost'

const ProfileNews = () => {
  return (
    <section className="content__news">
      <article className="content__news__header">
      </article>
      <article className="content__news__content">
        <ProfilePost />
      </article>
      <article className="content__news__footer">

      </article>
    </section>
  )
}

export default ProfileNews
