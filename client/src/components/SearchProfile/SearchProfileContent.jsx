import React from 'react'
import './SearchProfileContent.scss'
import Dashboard from './Dashboard';
import ProfileNews from '../Profile/ProfileNews'

const SearchProfileContent = () => {

  return (
    <section className="content">
      <article className="content__navigation">
        <Dashboard/>
      </article>
      <h3 className="content__title">News</h3>
      <ProfileNews />
      <ProfileNews />
      <ProfileNews />
    </section>
  )
}

export default SearchProfileContent;
