import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import './ResultCard.scss'
import Image from '../../assets/images/banner.png'
import ExampleImageOne from '../../assets/images/1.jpg'
import ExampleImageTwo from '../../assets/images/2.jpg'
import ExampleImageThree from '../../assets/images/3.jpg'



function ResultCard (props) {
  const [open, setOpen] = useState(false)

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
          <img src={Image} alt="" className="modal__header"/>
          <article className="modal__profile">
            <img src={props.image} alt='profile-pic' className="modal__profile__image"/>
            <article className="modal__buttons">
              <button className="modal__buttons__button modal__buttons__button--save">Save</button>
              <button className="modal__buttons__button modal__buttons__button--contact">Contact</button>
            </article>
            <article className="modal__profile__info">
              <article className="modal__profile__info__attributes">
                <h3>Model, stuntwoman</h3>
                <h4>{props.height}</h4>
                <h4>{props.eyeColor}</h4>
                <h4>{props.gender}</h4>
              </article>
              <article className="modal__profile__info__representation">
                <h4>Representation</h4>
              </article>
            </article>
            <article className="modal__profile__button">
              <Link to={`/profile/${props.id}`}>
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
          </article>
        </section>
      </Modal>
      <article className="talentcard max-w-sm rounded overflow-hidden shadow-lg" onClick={handleToggle(true)}>
        <img className="talentcard__image w-full" src={props.image} alt="Sunset in the mountains" />
        <div className="talentcard__info px-6 py-4">
          <p className="talentcard__info__text text-gray-700 text-base">
            <ul className="talentcard__info__text--list">
              <li>{props.contact.city}</li>
              <li>{props.gender}</li>
              <li>{calculateActingAge(props.actingAge)}</li>
              <li>{`${calculateHeight(props.measurements.height)}(~${calculateHeightCM(props.measurements.height)}cm)`}</li>
            </ul>
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </article>
    </>
  )
}
export default ResultCard
