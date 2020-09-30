import React, { useState, useEffect } from 'react'
import DogInfo from './DogInfo';
import DogContent from './DogContent';
import DogLinks from './DogLinks';
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import DogCalendar from './DogCalendar';

import './DogProfile.scss'
import DogContact from './DogContact';

const DogProfile = (props) => {
  if (!props.user) props.history.push('/login')
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

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    
    status === 'loaded'? 
    <>
      <LoggedInNav />
      <main className="profile__main">
        <section className="profile__content">
          <DogInfo data={profileData} viewCalendar={viewCalendar} viewContact={viewContact} viewProfile={viewProfile} />
          {openProfile ? <><DogLinks/><DogContent data={profileData}/></> : null }
          {openCalendar ? <><section className="profilenav">
                              <h3 className="profilenav__link">Calendar</h3>
                            </section>{profileData.available ? <DogCalendar dates={profileData.available} unavailable={profileData.unavailable}/> : null}</> : null}
          {openContact ? <><section className="profilenav">
                              <h3 className="profilenav__link">Contact</h3>
                            </section><DogContact /></> : null}
        </section>
      </main>
    </>
    : null
  )
}

export default DogProfile
