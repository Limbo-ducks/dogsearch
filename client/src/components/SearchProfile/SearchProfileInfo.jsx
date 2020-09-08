import React from 'react'
import './SearchProfileInfo.scss'
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

const SearchProfileInfo = ({viewCalendar, viewContact, viewProfile}) => {
  return (
    <section className="info">
      <article className="info__header">
        <img src={Image} alt="" className="info__header__banner"/>
        <img src={ExampleImageOne} alt="" className="info__header__profileimg"/>
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
        <h2 className="info__content__text">Jane Doe</h2>
        <h3 className="info__content__text">Recruiter</h3>
        <h3 className="info__content__text"><LocationOnOutlinedIcon/> Stockholm, Sweden</h3>
        <article className="info__content__attributes">
          <InfoOutlinedIcon/>
          <article className="info__content__attributes__text">
          
          </article>
        </article>
        <h3 className="info__content__text info__content__text--representation"><BusinessCenterOutlinedIcon/> Representation AB</h3>
      </article>
      <article className="info__footer">

      </article>
    </section>
  )
}

export default SearchProfileInfo;
