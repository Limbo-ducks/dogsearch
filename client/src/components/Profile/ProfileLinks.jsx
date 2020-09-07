import React from 'react'
import './ProfileLinks.scss'

const ProfileLinks = () => {
  return (
    <section className="profilenav">
      <a href="#images"><h3 className="profilenav__link">Images</h3></a>
      <a href="#video"><h3 className="profilenav__link">Video</h3></a>
      <a href="#audio"><h3 className="profilenav__link">Audio</h3></a>
      <a href="#news"><h3 className="profilenav__link">News</h3></a>
      <a href="#attributes"><h3 className="profilenav__link">Attributes</h3></a>
    </section>
  )
}

export default ProfileLinks;
