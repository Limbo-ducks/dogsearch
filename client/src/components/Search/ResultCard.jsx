import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core'
import './ResultCard.scss'
import Image from '../../assets/images/banner.png'

function ResultCard (props) {
  const [open, setOpen] = useState(false)

  const handleToggle = bool => () => {
    setOpen(bool)
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
        {/* <article style={{ backgroundColor: 'white' }} className > */}
          <img src={Image} alt="" className="modal__header"/>
          <article className="modal__profile">
            <img src={props.image} alt='profile-pic' className="modal__profile__image"/>
            <article className="modal__profile__info">
              <h3>{props.name}</h3>
              <h4>{props.height}</h4>
              <h4>{props.eyeColor}</h4>
              <h4>{props.gender}</h4>
            </article>
            <Link to={`/talents/${props.id}`}>View Profile</Link>
          </article>
        </section>
      </Modal>
      <article className="talentcard max-w-sm rounded overflow-hidden shadow-lg" onClick={handleToggle(true)}>
        <img className="talentcard__image w-full" src={props.image} alt="Sunset in the mountains" />
        <div className="talentcard__info px-6 py-4">
          {/* <div className="font-bold text-xl mb-2">The Coldest Sunset</div> */}
          <p className="talentcard__info__text text-gray-700 text-base">
            <ul className="talentcard__info__text--list">
              <li>Boston, MA</li>
              <li>Female</li>
              <li>18-25 (Acting Age)</li>
              <li>5'8" (~173 cm)</li>
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
