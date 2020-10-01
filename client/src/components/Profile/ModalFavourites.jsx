import React from 'react'
import './ModalFavourites.scss'
import BlankImage from '../../assets/images/blank-profile-picture.png'
import Dog from '../../assets/images/corgi.jpg'

import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import CheckIcon from '@material-ui/icons/Check';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

const ModalFavourites = ({ viewFavourites }) => {

  return (
    <section className="contentmodal">
      <article onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewFavourites(e.currentTarget)
                  }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <h3 className="contentmodal__title">Favourites</h3>
      <section className="favourites">
        <article className="favourites__row favourites__row--title">
          <article className="favourites__column">
            <h5>Image</h5>
          </article>
          <article className="favourites__column"><h5>Name</h5></article>
          <article className="favourites__column"><h5>Breed</h5></article>
          <article className="favourites__column"><h5>Size</h5></article>
          <article className="favourites__column"><h5>Gallery</h5></article>
          <article className="favourites__column"><h5>Availability</h5></article>
          <article className="favourites__column"><h5>Remove</h5></article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Very Large
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>

        <article className="favourites__row">
          <article className="favourites__column">
            <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Large
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Small
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Medium
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
            <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Large
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={BlankImage} alt=""/>
          </article>
          <article className="favourites__column">Example</article>
          <article className="favourites__column">Three</article>
          <article className="favourites__column">
            Small
          </article>
          <article className="favourites__column">
            <PhotoLibraryIcon />
          </article>
          <article className="favourites__column">
            <CheckIcon/>
          </article>
          <article className="favourites__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
      </section>
    </section>
  )
}

export default ModalFavourites;
