import React from 'react'
import './DogLinks.scss'

const DogLinks = () => {
  return (
    <section className="profilenav">
      <a href="#images"><h3 className="profilenav__link">Images</h3></a>
      /
      <a href="#video"><h3 className="profilenav__link">Video</h3></a>
      /
      <a href="#attributes"><h3 className="profilenav__link">Attributes</h3></a>
    </section>
  )
}

export default DogLinks;
