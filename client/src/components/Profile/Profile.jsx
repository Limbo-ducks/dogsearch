import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import ProfileInfo from './ProfileInfo.jsx';
import ProfileContent from './ProfileContent';
import ModalFavourites from './ModalFavourites';
import Projects from './Projects';
import Messages from './Messages';
import ProfileCalendar from './ProfileCalendar';
import './Profile.scss'


const SearchProfile = (props) => {
  const profileId = props.match.params.id

  const [openProfile, setOpenProfile] = useState(true);
  const [openFavourites, setOpenFavourites,] = useState(false);
  const [openProjects, setOpenProjects,] = useState(false);
  const [openMessages, setOpenMessages,] = useState(false);
  const [openCalendar, setOpenCalendar,] = useState(false);
  const [profileData, setProfileData] = useState({});
  const [status, setStatus] = useState('loading');


  //profiles/${profileId}
  useEffect(()=>{
    if(status === 'loading'){
          fetch(`/api/users/me`, 
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

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenFavourites(false)
    setOpenProjects(false)
    setOpenCalendar(false)
    setOpenMessages(false)
  }

  const viewFavourites = () => {
    if (!openFavourites) { 
      setOpenFavourites(true)
      setOpenProfile(false)
      setOpenProjects(false)
      setOpenCalendar(false)
    } else {
      setOpenFavourites(false)
      setOpenProfile(true)
      setOpenProjects(false)
      setOpenCalendar(false)
    }
  }

  const viewProjects = () => {
    if (!openProjects) { 
      setOpenProjects(true)
      setOpenProfile(true)
      setOpenFavourites(false)
      setOpenCalendar(false)
    } else {
      setOpenProjects(false)
      setOpenFavourites(false)
      setOpenCalendar(false)
      setOpenProfile(true)
    }
  }

  const viewMessages = () => {
    if (!openMessages) { 
      setOpenMessages(true)
      setOpenProfile(true)
      setOpenFavourites(false)
      setOpenCalendar(false)
    } else {
      setOpenMessages(false)
      setOpenFavourites(false)
      setOpenCalendar(false)
      setOpenProfile(true)
    }
  }

  const viewCalendar = () => {
    if (!openCalendar) { 
      setOpenCalendar(true)
      setOpenProfile(true)
      setOpenFavourites(false)
      setOpenMessages(false)
    } else {
      setOpenCalendar(false)
      setOpenMessages(false)
      setOpenFavourites(false)
      setOpenProfile(true)
    }
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)
  })

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
    });
  });
  
  if(status === 'loaded') {
    return (
      <>
        <LoggedInNav viewMessages={viewMessages}/>
        <main className="profile">
          <section className="profile__content">
            <ProfileInfo 
              data={profileData} 
              viewProfile={viewProfile} 
              viewProjects={viewProjects} 
              viewMessages={viewMessages} 
              viewCalendar={viewCalendar} 
              viewFavourites={viewFavourites}/>
            { openProfile ? 
            <ProfileContent 
              viewProjects={viewProjects} 
              viewFavourites={viewFavourites} 
              viewCalendar={viewCalendar} 
              viewMessages={viewMessages}/> 
            : null }
            { openFavourites ? 
            <ModalFavourites 
              viewFavourites={viewFavourites}/> 
            : null }
            { openProjects ? 
            <Projects 
              viewFavourites={viewFavourites} 
              viewProjects={viewProjects}/> 
            : null }
            { openMessages ? 
            <Messages 
              viewMessages={viewMessages}/> 
            : null }
            { openCalendar? 
            <ProfileCalendar 
              viewCalendar={viewCalendar} 
              available={profileData.available} 
              unavailable={profileData.unavailable}/> 
            : null }
          </section>
        </main>
      </> 
    )
  } else {
    return null
  }
}

export default SearchProfile