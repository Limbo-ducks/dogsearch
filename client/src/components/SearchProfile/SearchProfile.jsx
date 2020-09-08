import React from 'react'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import SearchProfileInfo from './SearchProfileInfo.jsx';

import './SearchProfile.scss'

const SearchProfile = (props) => {

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <LoggedInNav />
      <main className="profile">
        <section className="profile__content">
          <SearchProfileInfo />
        </section>
      </main>
    </>
  )
}

export default SearchProfile
