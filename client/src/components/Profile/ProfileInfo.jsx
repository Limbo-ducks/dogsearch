import React from 'react'
import './ProfileInfo.scss'
import DateRangeIcon from '@material-ui/icons/DateRange';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import HeaderBackground from '../../assets/images/background.jpg';
import PetsIcon from '@material-ui/icons/Pets';
import { Tooltip } from '@material-ui/core';
import BlankProfile from '../../assets/images/blank-profile-picture.png'

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const ProfileInfo = ({ data, viewMessages, viewProfile, viewProjects, viewCalendar, viewFavourites }) => {
  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={data.image ? data.image : BlankProfile} alt="" className="info__header__profileimg"/>
      </article>
      <article className="info__navigation">
        <Tooltip title="Home" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><HomeIcon />
          </article>
        </Tooltip>
        <Tooltip title="Messages" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewMessages(e.currentTarget)
            }}><EmailIcon />
          </article>
        </Tooltip>
        <Tooltip title="Favourites" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewFavourites(e.currentTarget)
            }}><PetsIcon />
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
      <article className="info__content info__content--info">
        {data.name ? <h2 className="info__content__text">{data.name}</h2> : null}
      </article>
      <article className="info__nav">
        <button 
          className="info__nav__button" 
          onClick={(e) => {
            e.preventDefault();
            viewFavourites(e.currentTarget)
            }}>
          <article className="info__nav__button__icon">
            <PetsIcon />
          </article>
          <h4 className="info__nav__button__text">My Favourites</h4>
        </button>
        <button 
          className="info__nav__button"
          onClick={(e) => {
            e.preventDefault();
            viewCalendar(e.currentTarget)
            }}>
          <article className="info__nav__button__icon">
            <DateRangeIcon />
          </article>
          <h4 className="info__nav__button__text">My Calendar</h4>
        </button>
        <button 
          className="info__nav__button"
          onClick={(e) => {
            e.preventDefault();
            viewMessages(e.currentTarget)
            }}>
          <article className="info__nav__button__icon">
            <EmailIcon />
          </article>
          <h4 className="info__nav__button__text">My Messages</h4>
        </button>
        <button className="info__nav__button">
          <article className="info__nav__button__icon">
            <SettingsIcon />
          </article>
          <h4 className="info__nav__button__text">Profile Settings</h4>
        </button>
      </article>
    </section>
  )
}

export default ProfileInfo;
