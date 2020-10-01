import React, {useState, useEffect} from 'react'
import  { Redirect } from 'react-router-dom'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import ProfileInfo from './ProfileInfo.jsx';
import ProfileProjects from './ProfileProjects.jsx';

import './Profile.scss'
import ProfileContent from './ProfileContent';
import SingleProject from './SingleProject';
import SingleProjectNav from './SingleProjectNav';
import ModalFavourites from './ModalFavourites';
import Projects from './Projects';
import Messages from './Messages';
import SearchProfileCalendar from './ProfileCalendar';


const SearchProfile = (props) => {
  const profileId = props.match.params.id

  const [openProfile, setOpenProfile] = useState(true);
  const [openSingleProject, setOpenSingleProject,] = useState(false);
  const [openShortlist, setOpenShortlist,] = useState(false);
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

  const viewSingleProject = () => {
    setOpenSingleProject(true)
    setOpenProfile(false)
    setOpenShortlist(false)
    setOpenProjects(false)
    setOpenCalendar(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenSingleProject(false)
    setOpenShortlist(false)
    setOpenProjects(false)
    setOpenCalendar(false)
    setOpenMessages(false)
  }

  const viewShortlist = () => {
    if (!openShortlist) { 
      setOpenShortlist(true)
      setOpenSingleProject(true)
      setOpenProfile(false)
      setOpenProjects(false)
      setOpenCalendar(false)
    } else {
      setOpenShortlist(false)
      setOpenProfile(true)
      setOpenProjects(false)
      setOpenSingleProject(true)
      setOpenCalendar(false)
    }
  }

  const viewProjects = () => {
    if (!openProjects) { 
      setOpenProjects(true)
      setOpenSingleProject(false)
      setOpenProfile(true)
      setOpenShortlist(false)
      setOpenCalendar(false)
    } else {
      setOpenProjects(false)
      setOpenShortlist(false)
      setOpenSingleProject(false)
      setOpenCalendar(false)
      setOpenProfile(true)
    }
  }

  const viewMessages = () => {
    if (!openMessages) { 
      setOpenMessages(true)
      setOpenSingleProject(false)
      setOpenProfile(true)
      setOpenShortlist(false)
      setOpenCalendar(false)
    } else {
      setOpenMessages(false)
      setOpenShortlist(false)
      setOpenSingleProject(false)
      setOpenCalendar(false)
      setOpenProfile(true)
    }
  }

  const viewCalendar = () => {
    if (!openCalendar) { 
      setOpenCalendar(true)
      setOpenSingleProject(false)
      setOpenProfile(true)
      setOpenShortlist(false)
      setOpenMessages(false)
    } else {
      setOpenCalendar(false)
      setOpenMessages(false)
      setOpenShortlist(false)
      setOpenSingleProject(false)
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
            <ProfileInfo data={profileData} viewProfile={viewProfile} viewProjects={viewProjects} viewMessages={viewMessages} viewCalendar={viewCalendar} viewShortlist={viewShortlist}/>
            { openProfile ? <ProfileContent viewProjects={viewProjects} viewShortlist={viewShortlist} viewCalendar={viewCalendar} viewMessages={viewMessages}/> : null }
            {/* { openSingleProject ? <><SingleProjectNav/><SingleProject viewShortlist={viewShortlist}/></> : null} */}
            { openShortlist ? <ModalFavourites viewShortlist={viewShortlist}/> : null }
            { openProjects ? <Projects viewShortlist={viewShortlist} viewProjects={viewProjects}/> : null }
            { openMessages ? <Messages viewMessages={viewMessages}/> : null }
            { openCalendar? <SearchProfileCalendar viewCalendar={viewCalendar} available={profileData.available} unavailable={profileData.unavailable}/> : null }
            {/* <ProfileProjects viewSingleProject={viewSingleProject} viewShortlist={viewShortlist}/> */}
          </section>
        </main>
      </> 
    )
  } else {
    return null
  }
}

export default SearchProfile