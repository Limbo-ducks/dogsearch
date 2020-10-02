import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import './ResultCard.scss'
import Image from '../../assets/images/background.jpg'
import ExampleImageOne from '../../assets/images/corgi.jpg'
import ExampleImageTwo from '../../assets/images/germanshepard.jpg'
import ExampleImageThree from '../../assets/images/daschund.jpg'
import AddIcon from '@material-ui/icons/Add';
import Popover from '@material-ui/core/Popover';
import PopoverContent from './PopoverContent';
import InfoIcon from '@material-ui/icons/Info';
import BlankImage from '../../assets/images/blank-profile-picture.png';
import PetsIcon from '@material-ui/icons/Pets';
import StarIcon from '@material-ui/icons/Star';
import CheckIcon from '@material-ui/icons/Check';

function ResultCard (props) {
  const { measurements } = props;

  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    event.stopPropagation()
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? 'simple-popover' : undefined;

  const handleToggle = bool => () => {
    setOpen(bool)
  }

  const dog = `dog/${props.id}`;

  return (
    <>
      <Modal
        open={open}
        onClose={handleToggle(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <section className="modal">
          {props.premium ? <h3 className="modal__premium"><StarIcon/></h3> : null}
          <img src={Image} alt="" className="modal__header"/>
          <section className="modal__profile">
            <img 
              src={props.image ? `${props.image}` : `${BlankImage}`} 
              alt='profile-pic' 
              className="modal__profile__image"/>
            <article className="modal__buttons">
              <button 
                onClick={handleClick} 
                className="modal__buttons__button modal__buttons__button--save">
                Favourite
                <AddIcon/>             
              </button>
            </article>
            <section className="modal__profile__info">
              <article className="modal__profile__info__attributes">
                <article className="modal__name">
                  <h2><PetsIcon />{props.name}</h2>
                </article>
                <article className="modal__attributes">
                  <InfoIcon/>
                  <article className="modal__attributes__items">
                    <article><h4>Colour:</h4><p>{props.color}</p></article>
                    <article><h4>Size:</h4><p>{props.size}</p></article>
                    <article><h4>Gender:</h4><p>{props.gender}</p></article>
                    <article><h4>Age:</h4><p>{props.age} Years</p></article>
                    <article><h4>Breed:</h4><p>{props.breed}</p></article>
                    <article><h4>Childfriendly:</h4><p><CheckIcon /></p></article>
                  </article>
                </article>
              </article>
            </section>
            <article className="modal__profile__button">
              <Link 
                to={props.user ? `/dog/${props.id}` : {pathname: '/login', dog: `${dog}`}}>
                <button>
                  {props.user ? 'View Profile' : 'Log in to view profile'}
                </button>
              </Link>
            </article>
  
          {props.gallery ?
            <article className="gallery">
              <article className="gallery__gradient"></article>
              <article className="gallery__column">
                  <img src={props.gallery[0] ? props.gallery[0].url: BlankImage} alt=""/>
                  <img src={props.gallery[1] ? props.gallery[1].url: BlankImage} alt=""/>   
              </article>

              <article className="gallery__column">
                  <img src={props.gallery[2] ? props.gallery[2].url: BlankImage} alt=""/>
                  <img src={props.gallery[3] ? props.gallery[3].url: BlankImage} alt=""/>   
              </article>

              <article className="gallery__column">
                  <img src={props.gallery[4] ? props.gallery[4].url: BlankImage} alt=""/>
                  <img src={props.gallery[5] ? props.gallery[5].url: BlankImage} alt=""/>   
              </article> 
            </article>
            :
            <article className="gallery">
              <article className="gallery__gradient"></article>
              <article className="gallery__column">
                <img src={ExampleImageTwo} alt=""/>
                <img src={ExampleImageTwo} alt=""/>
              </article>

              <article className="gallery__column">
                <img src={ExampleImageThree} alt=""/>
                <img src={ExampleImageOne} alt=""/>
              </article>

              <article className="gallery__column">
                <img src={ExampleImageTwo} alt=""/>
                <img src={ExampleImageThree} alt=""/>
              </article>
            </article>
            }

          </section>
        </section>
      </Modal>
      <article className={`dogcard max-w-sm rounded overflow-hidden shadow-lg ${props.premium ? 'premium' : ''}`} onClick={handleToggle(true)}>
        <img className="dogcard__image w-full" src={props.image ? `${props.image}` : `${BlankImage}`} alt="dog-image" /> 
        <button className="dogcard__bookmark" onClick={handleClick}>
          <AddIcon fontSize="small" className="dogcard__bookmark--click"/>
        </button>
          
        <div className="dogcard__info px-6 py-4">
          <p className="dogcard__info__text text-gray-700 text-base">
            <ul className="dogcard__info__text--list">
              <li>{props.breed}</li>
              <li>{props.gender}</li>
              <li>{props.age}</li>
              <li>{props.size}</li>
            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#treats</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#walks</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#sticks</span>
          {props.premium ? 
          <span className="premium-chip inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><PetsIcon/></span>
           : null}
        </div>
      </article>
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
          }}
        >
          <PopoverContent/>
      </Popover>
    </>
  )
}
export default ResultCard
