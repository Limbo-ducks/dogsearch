import React from 'react'
import './ProjectShortlist.scss'
import BlankImage from '../../assets/images/blank-profile-picture.png'
import Dog from '../../assets/images/corgi.jpg'

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import CheckIcon from '@material-ui/icons/Check';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const ProjectShortlist = ({ viewShortlist }) => {

  return (
    <section className="contentmodal">
      <article onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewShortlist(e.currentTarget)
                  }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <h3 className="contentmodal__title">Favourites</h3>
      <section className="shortlist">
        <article className="shortlist__row shortlist__row--title">
          <article className="shortlist__column">
            <h5>Image</h5>
          </article>
          <article className="shortlist__column"><h5>Name</h5></article>
          <article className="shortlist__column"><h5>Breed</h5></article>
          <article className="shortlist__column"><h5>Size</h5></article>
          <article className="shortlist__column"><h5>Gallery</h5></article>
          <article className="shortlist__column"><h5>Availability</h5></article>
          <article className="shortlist__column"><h5>Remove</h5></article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Very Large
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>

        <article className="shortlist__row">
          <article className="shortlist__column">
            <img src={Dog} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Large
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Small
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Medium
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
            <img src={Dog} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Large
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            Small
          </article>
          <article className="shortlist__column">
            <PhotoLibraryIcon />
          </article>
          <article className="shortlist__column">
            <CheckIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
      </section>
    </section>
  )
}

export default ProjectShortlist;
