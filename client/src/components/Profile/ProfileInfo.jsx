import React from 'react'
import './ProfileInfo.scss'

import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import Blank from '../../assets/images/blank-profile-picture.png'
import HeaderBackground from '../../assets/images/talentwyre-background.jpg'
import { Tooltip } from '@material-ui/core';

const calculateHeight = height => {
  const feet = Math.floor(height / 12)
  return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
}

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const ProfileInfo = ({data, viewCalendar, viewContact, viewProfile, viewCv, viewComponent}) => {

  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={data.image ? `${data.image}` : `${Blank}`} alt="" className="info__header__profileimg"/>
        {data.premium ? <h3 className="modal__premium">Premium</h3> : null}
      </article>
      <article className="info__navigation">
        <Tooltip title="View profile" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><PersonOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="View CV" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCv(e.currentTarget)
            }}><DescriptionOutlinedIcon />
          </article>
        </Tooltip>
        <Tooltip title="Contact Talent" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewContact(e.currentTarget)
            }}><MailOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="View Calendar" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewCalendar(e.currentTarget)
            }}><DateRangeIcon />
          </article>
        </Tooltip>
      </article>
      <article className="info__content">
        <h2 className="info__content__text">
          {data.gender === 'female' && data.profession.toLowerCase() === 'actor' ? 
            'Actress' : 'Actor'}
        </h2>
        <h3 className="info__content__text"><LocationOnOutlinedIcon/> 
        <i>{data.contact.city === '' ? 'Unknown' : `${data.contact.city}, ${data.contact.citizenship}`}</i>
        </h3>
        <article className="info__content__attributes">
          <InfoOutlinedIcon/>
          <article className="info__content__attributes__text">
            <h3 className="info__content__text"><b>Height:</b> {calculateHeight(data.measurements.height)}</h3>
            <h3 className="info__content__text"><b>Eyes:</b> {upCaseFirst(data.eyeColor)}</h3>
            <h3 className="info__content__text"><b>Acting age:</b> {data.age - 5} - {data.age + 5}</h3>
          </article>
        </article>
        <h3 className="info__content__text info__content__text--representation"><BusinessCenterOutlinedIcon/> Representation AB</h3>
      </article>
      <article className="info__footer">

      </article>
    </section>
  )
}

export default ProfileInfo;
