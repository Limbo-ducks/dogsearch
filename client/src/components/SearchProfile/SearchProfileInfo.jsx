import React from 'react'
import './SearchProfileInfo.scss'
import ExampleImageOne from '../../assets/images/1.jpg'
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import HeaderBackground from '../../assets/images/talentwyre-background.jpg'
import { Tooltip } from '@material-ui/core';

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const SearchProfileInfo = ({ data, viewMessages, viewProfile, viewProjects, viewCalendar}) => {
  return (
    <section className="info">
      <article className="info__header">
        <img src={HeaderBackground} alt="" className="info__header__banner"/>
        <img src={ExampleImageOne} alt="" className="info__header__profileimg"/>
      </article>
      <article className="info__navigation">
        <Tooltip title="Home" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><HomeOutlinedIcon />
          </article>
        </Tooltip>
        <Tooltip title="Messages" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewMessages(e.currentTarget)
            }}><MailOutlineIcon />
          </article>
        </Tooltip>
        <Tooltip title="Network" placement="top">
          <article onClick={(e) => {
            e.preventDefault();
            viewProfile(e.currentTarget)
            }}><PeopleAltOutlinedIcon />
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
        <h2 className="info__content__text">{data.name}</h2>
        <h3 className="info__content__text">{upCaseFirst(data.profession)}</h3>
        <h3 className="info__content__text"><LocationOnOutlinedIcon/> {data.contact.city}, {data.contact.citizenship}</h3>
      </article>
      <article className="info__nav">
        <button className="info__nav__button" onClick={(e) => {
            e.preventDefault();
            viewProjects(e.currentTarget)
            }}>
          <h4 className="info__nav__button__text">My projects</h4>
          <article className="info__nav__button__icon">
            <FileCopyOutlinedIcon />
          </article>
        </button>
        <button className="info__nav__button">
          <h4 className="info__nav__button__text">My calendar</h4>
          <article className="info__nav__button__icon">
            <DateRangeIcon />
          </article>
        </button>
        <button className="info__nav__button">
          <h4 className="info__nav__button__text">My messages</h4>
          <article className="info__nav__button__icon">
            <MailOutlineIcon />
          </article>
        </button>
        <button className="info__nav__button">
          <h4 className="info__nav__button__text">Profile Settings</h4>
          <article className="info__nav__button__icon">
            <SettingsOutlinedIcon />
          </article>
        </button>
      </article>
    </section>
  )
}

export default SearchProfileInfo;
