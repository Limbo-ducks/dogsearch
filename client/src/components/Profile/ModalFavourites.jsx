import React from 'react'
import './ModalFavourites.scss'
import Dog from '../../assets/images/corgi.jpg'

import CancelIcon from '@material-ui/icons/Cancel';

import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import BackspaceIcon from '@material-ui/icons/Backspace';

const ModalFavourites = ({ viewFavourites }) => {

  return (
    <section className="contentmodal">
      <article onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewFavourites(e.currentTarget)
                  }} className="contentmodal__exit"><CancelIcon/>
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
          <article className="favourites__column"><h5>Age</h5></article>
          <article className="favourites__column"><h5>Gallery</h5></article>
          <article className="favourites__column"><h5>Remove</h5></article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
          7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>

        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
          7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
          7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
          7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
            7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>
        <article className="favourites__row">
          <article className="favourites__column">
              <img src={Dog} alt=""/>
          </article>
          <article className="favourites__column"><h3>Carter</h3></article>
          <article className="favourites__column"><h4>Breed:</h4><p>Corgi</p></article>
          <article className="favourites__column">
            <h4>Size:</h4><p>Small</p>
          </article>
          <article className="favourites__column">
            7 years
          </article>
          <article className="favourites__column">
            <h4>Gallery: </h4><PhotoLibraryIcon />
          </article>
          <article className="favourites__column favourites__column--delete">
            <BackspaceIcon/>
          </article>
        </article>

      </section>
    </section>
  )
}

export default ModalFavourites;
