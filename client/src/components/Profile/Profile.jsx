import React, { useState, useEffect } from 'react'
import ProfileInfo from './ProfileInfo';
import ProfileAbout from './ProfileAbout';
import ProfileContent from './ProfileContent';
import ProfileLinks from './ProfileLinks';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import ProfileCalendar from './ProfileCalendar';

import './Profile.scss'
import ProfileContact from './ProfileContact';
import ProfileCv from './ProfileCv';

const makeOpts = (body, method = 'GET') => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body
})

const Profile = (props) => {
  if (!props.user) props.history.push('/login')
  const profileId = props.match.params.id

  const [openProfile, setOpenProfile] = useState(true);
  const [openCalendar, setOpenCalendar] = useState(false);
  const [openContact, setOpenContact] = useState(false);
  const [openCv, setOpenCv] = useState(false);
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
    setOpenCv(false)
  }

  const viewContact = () => {
    setOpenContact(true)
    setOpenProfile(false)
    setOpenCalendar(false)
    setOpenCv(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenCalendar(false)
    setOpenContact(false)
    setOpenCv(false)
  }

  const viewCv = () => {
    setOpenCv(true)
    setOpenCalendar(false)
    setOpenContact(false)
    setOpenProfile(false)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    
    status === 'loaded'? 
    <>
    {console.log(profileData)}
      <LoggedInNav />
      <main className="profile__main">
        <section className="profile__content">
          <ProfileInfo data={profileData} viewCalendar={viewCalendar} viewContact={viewContact} viewProfile={viewProfile} viewCv={viewCv} />
          {openProfile ? <><ProfileLinks/><ProfileContent data={profileData}/></> : null }
          {openCalendar ? <><section className="profilenav">
                              <h3 className="profilenav__link">Calendar</h3>
                            </section><ProfileCalendar dates={profileData.available}/></> : null}
          {openContact ? <><section className="profilenav">
                              <h3 className="profilenav__link">Contact</h3>
                            </section><ProfileContact /></> : null}
          {openCv ? <><section className="profilenav">
                        <a href="#actingcredits"><h3 className="profilenav__link">Acting Credits</h3></a> /
                        <a href="#nonactingcredits"><h3 className="profilenav__link">Non Acting Credits</h3></a> /
                        <a href="#education"><h3 className="profilenav__link">Education</h3></a> /
                        <a href="#skills"><h3 className="profilenav__link">Skills</h3></a>
                      </section><ProfileCv data={profileData}/></> : null }
          <ProfileAbout data={profileData.resume}/>
        </section>
      </main>
    </>
    : null
  )
}

export default Profile
