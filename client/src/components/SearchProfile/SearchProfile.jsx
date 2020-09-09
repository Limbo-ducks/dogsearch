import React from 'react'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import SearchProfileInfo from './SearchProfileInfo.jsx';
import SearchProjects from './SearchProjects.jsx';

import './SearchProfile.scss'
import SearchProfileContent from './SearchProfileContent';
import SingleProject from './SingleProject';
import SingleProjectNav from './SingleProjectNav';
import ProjectShortlist from './ProjectShortlist';
import Projects from './Projects';
import Messages from './Messages';


const SearchProfile = (props) => {
  const [openProfile, setOpenProfile] = React.useState(true);
  const [openSingleProject, setOpenSingleProject,] = React.useState(false);
  const [openShortlist, setOpenShortlist,] = React.useState(false);
  const [openProjects, setOpenProjects,] = React.useState(false);
  const [openMessages, setOpenMessages,] = React.useState(false);

  const viewSingleProject = () => {
    setOpenSingleProject(true)
    setOpenProfile(false)
    setOpenShortlist(false)
    setOpenProjects(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenSingleProject(false)
    setOpenShortlist(false)
    setOpenProjects(false)
  }

  const viewShortlist = () => {
    if (!openShortlist) { 
      setOpenShortlist(true)
      setOpenSingleProject(true)
      setOpenProfile(false)
      setOpenProjects(false)
    } else {
      setOpenShortlist(false)
      setOpenProfile(true)
      setOpenProjects(false)
      setOpenSingleProject(true)
    }
  }

  const viewProjects = () => {
    if (!openProjects) { 
      setOpenProjects(true)
      setOpenSingleProject(false)
      setOpenProfile(true)
      setOpenShortlist(false)
    } else {
      setOpenProjects(false)
      setOpenShortlist(false)
      setOpenSingleProject(false)
      setOpenProfile(true)
    }
  }

  const viewMessages = () => {
    if (!openMessages) { 
      setOpenMessages(true)
      setOpenSingleProject(false)
      setOpenProfile(true)
      setOpenShortlist(false)
    } else {
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
  
  return (
    <>
      <LoggedInNav />
      <main className="profile">
        <section className="profile__content">
          <SearchProfileInfo viewProfile={viewProfile} viewProjects={viewProjects} viewMessages={viewMessages}/>
          { openProfile ? <SearchProfileContent viewProjects={viewProjects}/> : null }
          { openSingleProject ? <><SingleProjectNav/><SingleProject viewShortlist={viewShortlist}/></> : null}
          { openShortlist ? <ProjectShortlist viewShortlist={viewShortlist}/> : null }
          { openProjects ? <Projects viewShortlist={viewShortlist} viewProjects={viewProjects}/> : null }
          { openMessages ? <Messages viewMessages={viewMessages}/> : null }
          <SearchProjects viewSingleProject={viewSingleProject} viewShortlist={viewShortlist}/>
        </section>
      </main>
    </>
  )
}

export default SearchProfile
