import React from 'react'
import LoggedInNav from '../LoggedInNav/LoggedInNav';
import SearchProfileInfo from './SearchProfileInfo.jsx';
import SearchProjects from './SearchProjects.jsx';

import './SearchProfile.scss'
import SearchProfileContent from './SearchProfileContent';
import SingleProject from './SingleProject';
import SingleProjectNav from './SingleProjectNav';


const SearchProfile = (props) => {
  const [openProfile, setOpenProfile] = React.useState(true);
  const [openSingleProject, setOpenSingleProject,] = React.useState(false);

  const viewSingleProject = () => {
    setOpenSingleProject(true)
    setOpenProfile(false)
  }

  const viewProfile = () => {
    setOpenProfile(true)
    setOpenSingleProject(false)
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
          <SearchProjects viewSingleProject={viewSingleProject}/>
        </section>
      </main>
    </>
  )
}

export default SearchProfile
