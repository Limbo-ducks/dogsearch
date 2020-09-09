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

const makeOpts = (body, method = 'GET') => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body
})

const Profile = (props) => {
  const profileId = props.match.params.id

  const [openProfile, setOpenProfile] = useState(true);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [status, setStatus] = useState('loading');

  useEffect(()=>{
    if(status === 'loading'){
          fetch(`/api/profiles/${profileId}`, 
            {
              method:'GET',
              headers: {'Content-Type' : 'application/json'}
             })
            .then(res => res.json())
            .then(data => setProfileData(data))
            .catch(console.log)
            .finally(() => setStatus('loaded'))
        }
  }, [status])


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
    status === 'loaded'? 
    <>
      <LoggedInNav />
      <main className="profile__main">
        <section className="profile__content">
          <ProfileInfo data={profileData} viewCalendar={viewCalendar} viewContact={viewContact} viewProfile={viewProfile}/>
          {openProfile ? <><ProfileLinks/><ProfileContent data={profileData}/></> : null }
          {openCalendar ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Calendar</h3></a>
                            </section><ProfileCalendar /></> : null}
          {openContact ? <><section className="profilenav">
                              <a href="#images"><h3 className="profilenav__link">Contact</h3></a>
                            </section><ProfileContact /></> : null}
          <ProfileAbout data={profileData.resume}/>
        </section>
      </main>
    </>
    : null
  )
}

export default Profile
