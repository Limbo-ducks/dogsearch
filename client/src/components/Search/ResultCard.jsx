import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import './ResultCard.scss'
import Image from '../../assets/images/banner.png'
import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'
import CollectionsBookmarkOutlinedIcon from '@material-ui/icons/CollectionsBookmarkOutlined';
import Popover from '@material-ui/core/Popover';
import PopoverContent from './PopoverContent';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';


function ResultCard (props) {
  const {measurements} = props;

  const [open, setOpen] = useState(false)
  const [placement, setPlacement] = React.useState();
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

  const calculateActingAge = age => {
    if(age < 18) {
      return `${age}-${age+2} (Acting age)`
    } else if(age > 75) {
      return '75+ (Acting age)'
    } else {
      return `${age}-${age+5} (Acting age)`
    }
  }  

  const calculateHeight = height => {
    const feet = Math.floor(height / 12)
    return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
  }

  const calculateHeightCM = height => {
    const cm = height/0.39370
    return Math.ceil(cm)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleToggle(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <section className="modal">
          {props.premium ? <h3 className="modal__premium">Premium</h3> : null}
          <img src={Image} alt="" className="modal__header"/>
          <section className="modal__profile">
            <img src={props.image} alt='profile-pic' className="modal__profile__image"/>
            <article className="modal__buttons">
              <button className="modal__buttons__button modal__buttons__button--save">Save</button>
              <button className="modal__buttons__button modal__buttons__button--contact">Contact</button>
            </article>
            <section className="modal__profile__info">
              <article className="modal__profile__info__attributes">
                <h3>Model, stuntwoman - <i>{props.citizenship}</i></h3>
                <article className="modal__attributes">
                  <InfoOutlinedIcon/>
                  <article className="modal__attributes__items">
                    <h4><b>Height:</b> {calculateHeight(props.measurements.height)}(~{calculateHeightCM(props.measurements.height)}cm)</h4>
                    <h4><b>Eyecolour:</b> {props.eyeColor}</h4>
                    <h4><b>Body Type:</b> {measurements.bodyType}</h4>
                    <h4><b>Gender:</b> {props.gender}</h4>
                  </article>
                </article>
              </article>
              <article className="modal__profile__info__representation">
                <h4><BusinessCenterOutlinedIcon/>Representation</h4>
              </article>
            </section>
            <article className="modal__profile__button">
              <Link to={!props.user ? `/profile/${props.id}` : '/login'}>
                <button>
                  View Profile
                </button>
              </Link>
            </article>
            <article className="gallery">
              <article className="gallery__gradient"></article>
              <article className="gallery__column">
                <img src={ExampleImageOne} alt=""/>
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
          </section>
        </section>
      </Modal>
      <article className={`talentcard max-w-sm rounded overflow-hidden shadow-lg ${props.premium ? 'premium' : ''}`} onClick={handleToggle(true)}>
        <img className="talentcard__image w-full" src={props.image} alt="talent-image" /> 
        <button className="talentcard__bookmark" onClick={handleClick}>
          <CollectionsBookmarkOutlinedIcon fontSize="small" className="talentcard__bookmark--click"/>
          </button>
          
        
        <div className="talentcard__info px-6 py-4">
          <p className="talentcard__info__text text-gray-700 text-base">
            <ul className="talentcard__info__text--list">
              <li>{props.contact.city}</li>
              <li>{props.gender}</li>
              <li>{calculateActingAge(props.age)}</li>
              <li>{`${calculateHeight(props.measurements.height)}(~${calculateHeightCM(props.measurements.height)}cm)`}</li>
            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          {props.premium ? 
          <span className="premium-chip inline-block rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#premium</span>
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
