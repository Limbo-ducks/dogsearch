import React from 'react'
import ProfileInfo from './ProfileInfo';
import ProfileAbout from './ProfileAbout';
import ProfileContent from './ProfileContent';
import ProfileLinks from './ProfileLinks';
import LoggedInNav from '../LoggedInNav/LoggedInNav';

import './Profile.scss'

const Profile = (props) => {
  console.log(props)
  return (
    <>
      <LoggedInNav />
      <main className="profile">
        <section className="profile__content">
          <ProfileInfo />
          <ProfileLinks/>
          <ProfileContent />
          <ProfileAbout />
        </section>
      </main>
    </>
  )
}

export default Profile
