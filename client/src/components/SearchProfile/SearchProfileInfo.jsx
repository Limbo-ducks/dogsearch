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
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import FileCopyOutlinedIcon from '@material-ui/icons/FileCopyOutlined';
import RecentActorsOutlinedIcon from '@material-ui/icons/RecentActorsOutlined';
import { Tooltip } from '@material-ui/core';

const upCaseFirst = string => string.charAt(0).toUpperCase() + string.slice(1);

const SearchProfileInfo = ({ data, viewMessages, viewProfile, viewProjects}) => {
  return (
    <section className="info">
      <article className="info__header">
        <img src={Image} alt="" className="info__header__banner"/>
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
            viewProfile(e.currentTarget)
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
          <h3 className="info__nav__button__text">My projects</h3>
          <article className="info__nav__button__icon">
            <FileCopyOutlinedIcon />
          </article>
        </button>
        <button className="info__nav__button">
          <h3 className="info__nav__button__text">Profile Settings</h3>
          <article className="info__nav__button__icon">
            <SettingsOutlinedIcon />
          </article>
        </button>
      </article>
    </section>
  )
}

export default SearchProfileInfo;
