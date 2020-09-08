import React, { useState, useEffect } from 'react'
import ProfileInfo from './ProfileInfo';
import ProfileAbout from './ProfileAbout';
import ProfileContent from './ProfileContent';
import ProfileLinks from './ProfileLinks';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import ProfileCalendar from './ProfileCalendar';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import './Profile.scss'
import ProfileContact from './ProfileContact';

const Profile = (props) => {
  const profileId = props.match.params.id
  const baseURL = '/api/search'

  const [openProfile, setOpenProfile] = useState(true);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [profileData, setProfileData] = useState({});

  const getData = id => {
    fetch(baseURL)
      .then(res => res.json())
      .then(data => setProfileData(data))
      .catch(console.log)
  }


  const viewCalendar = () => {
    setOpenCalendar(true)
    setOpenProfile(false)
    setOpenContact(false)
  }

  const viewContact = () => {
    setOpenContact(true)
    setOpenProfile(false)
    setOpenCalendar(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenCalendar(false)
    setOpenContact(false)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <LoggedInNav />
      <main className="profile">
        <section className="profile__content">
          <ProfileInfo viewCalendar={viewCalendar} viewContact={viewContact} viewProfile={viewProfile}/>
          {openProfile ? <><ProfileLinks/><ProfileContent /></> : null }
          {openCalendar ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Calendar</h3></a>
                            </section><ProfileCalendar /></> : null}
          {openContact ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Contact</h3></a>
                            </section><ProfileContact /></> : null}
          <ProfileAbout />
        </section>
      </main>
    </>
  )
}

export default Profile
