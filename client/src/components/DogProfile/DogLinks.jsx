import React from 'react';
import './DogLinks.scss';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const DogLinks = () => {
  return (
    <section className="profilenav">
      <a href="#images"><h3 className="profilenav__link">Video</h3></a>
      <FiberManualRecordIcon/>
      <a href="#video"><h3 className="profilenav__link">Images</h3></a>
    </section>
  )
}

export default DogLinks;
