import React from 'react'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import SearchProfileInfo from './SearchProfileInfo.jsx';
import SearchProjects from './SearchProjects.jsx';

import './SearchProfile.scss'
import SearchProfileContent from './SearchProfileContent';
import SingleProject from './SingleProject';
import SingleProjectNav from './SingleProjectNav';
import ProjectShortlist from './ProjectShortlist';


const SearchProfile = (props) => {
  const [openProfile, setOpenProfile] = React.useState(true);
  const [openSingleProject, setOpenSingleProject,] = React.useState(false);
  const [openShortlist, setOpenShortlist,] = React.useState(false);

  const viewSingleProject = () => {
    setOpenSingleProject(true)
    setOpenProfile(false)
    setOpenShortlist(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenSingleProject(false)
    setOpenShortlist(false)
  }

  const viewShortlist = () => {
    if (!openShortlist) { 
      setOpenShortlist(true)
      setOpenSingleProject(false)
      setOpenProfile(false) 
    } else {
      setOpenShortlist(false)
      setOpenSingleProject(true)
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
          <SearchProfileInfo viewProfile={viewProfile} />
          { openProfile ? <SearchProfileContent /> : null }
          { openSingleProject ? <><SingleProjectNav/><SingleProject/></> : null}
          { openShortlist ? <ProjectShortlist viewShortlist={viewShortlist}/> : null }
          <SearchProjects viewSingleProject={viewSingleProject} viewShortlist={viewShortlist}/>
        </section>
      </main>
    </>
  )
}

export default SearchProfile
