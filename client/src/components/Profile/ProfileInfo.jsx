import React from 'react'
import './ProfileInfo.scss'
import Image from '../../assets/images/banner.png'
import ExampleImageOne from '../../assets/images/1.jpg'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import { Tooltip } from '@material-ui/core';

const calculateHeight = height => {
  const feet = Math.floor(height / 12)
  return `${feet}'${Math.floor((((height/12)-feet)*10))}"` 
}

const ProfileInfo = ({data, viewCalendar, viewContact, viewProfile}) => {

  return (
    <section className="info">
      <article className="info__header">
        <img src={data.media.slateShot} alt="" className="info__header__banner"/>
        <img src={data.image} alt="" className="info__header__profileimg"/>
        <Tooltip title="Add to shortlist"><StarBorderOutlinedIcon/></Tooltip>
      </article>
      <article className="info__navigation">
        <Tooltip title="profile" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><PersonOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="Contact" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewContact(e.currentTarget)
            }}><MailOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="Calendar" placement="top">
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
            {data.contact.city}, {data.contact.citizenship}
        </h3>
        <article className="info__content__attributes">
          <InfoOutlinedIcon/>
          <article className="info__content__attributes__text">
            <h3 className="info__content__text">Height: {calculateHeight(data.measurements.height)}</h3>
            <h3 className="info__content__text">Eyes: {data.eyeColor}</h3>
            <h3 className="info__content__text">Acting age: {data.age - 5} - {data.age + 5}</h3>
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
