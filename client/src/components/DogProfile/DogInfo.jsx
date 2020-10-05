import React from 'react';
import './DogInfo.scss';

import InfoIcon from '@material-ui/icons/Info';
import PetsIcon from '@material-ui/icons/Pets';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HomeIcon from '@material-ui/icons/Home';
import CheckIcon from '@material-ui/icons/Check';

import Blank from '../../assets/images/blank-profile-picture.png';
import HeaderBackground from '../../assets/images/background.jpg';
import { Tooltip } from '@material-ui/core';


const DogInfo = ({ data, viewContact, viewProfile }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const popoverOpen = Boolean(anchorEl);

  // const handleClick = event => {
  //   event.stopPropagation()
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={data.image ? `${data.image}` : `${Blank}`} alt="" className="info__header__profileimg"/>
        {/* <button className="dogcard__bookmark" onClick={handleClick}>
          <Tooltip title="Add to favourites" placement="top">
            <AddIcon className="dogcard__bookmark--click dogcard__bookmark--profile"/>
          </Tooltip>
        </button>
        <Popover
          id={id}
          className="popover"
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          placement='top-start'
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}>
          <PopoverContent/>
      </Popover> */}
      </article>
      <article className="info__navigation">
        <Tooltip title="View Home" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><HomeIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Gallery" placement="top">
          <article><PhotoLibraryIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Videos" placement="top">
          <article><VideoLibraryIcon />
          </article>
        </Tooltip>
      </article>
      <article className="info__content">
        <h2 className="info__content__text"><PetsIcon/> 
          {data.name === '' ? 'Unknown' : `${data.name}`}
        </h2>
        <article className="info__content__attributes">
          <InfoIcon/>
          <article className="info__content__attributes__text">
            <article><h4>Age:</h4><p>{data.age} Years</p></article>
            <article><h4>Size:</h4><p>{data.size}</p></article>
            <article><h4>Colour:</h4><p>{data.color}</p></article>
            <article><h4>Fur:</h4><p>{data.fur}</p></article>
            <Tooltip title={data.breed} placement="top">
              <article><h4>Breed:</h4><p>{data.breed}</p></article>
            </Tooltip>
            <article><h4>Child friendly:</h4><p><CheckIcon/></p></article>
            <article><h4>Cat friendly:</h4><p><CheckIcon/></p></article>
            <article><h4></h4><p></p></article>
          </article>
        </article>
      </article>
      <article className="info__footer">
      <button 
        className="info__footer__button"
        onClick={(e) => {
          e.preventDefault();
          viewContact(e.currentTarget)
          }}>Adopt {data.name}!</button>
      </article>
    </section>
  )
}

export default DogInfo;
