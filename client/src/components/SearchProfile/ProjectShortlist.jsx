import React from 'react'
import './ProjectShortlist.scss'
import ExampleImageOne from '../../assets/images/1.jpg'
import { Tooltip } from '@material-ui/core';

import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
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
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';

const ProjectShortlist = ({ viewShortlist }) => {

  return (
    <section className="contentmodal">
      <article onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  viewShortlist(e.currentTarget)
                  }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <h2 className="contentmodal__title">Project one</h2>
      <section className="shortlist">
        <article className="shortlist__row shortlist__row--title">
          <article className="shortlist__column">
            <h3>Image</h3>
          </article>
          <article className="shortlist__column">Role</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">Availability</article>
          <article className="shortlist__column">Request</article>
          <article className="shortlist__column">Contact</article>
          <article className="shortlist__column">Remove</article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>

        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={ExampleImageOne} alt=""/>
          </article>
          <article className="shortlist__column">Model</article>
          <article className="shortlist__column">Three</article>
          <article className="shortlist__column">
            <DateRangeIcon/>
          </article>
          <article className="shortlist__column">
            <VideocamOutlinedIcon />
            <AccessTimeIcon />
          </article>
          <article className="shortlist__column">
            <MailOutlineIcon/>
          </article>
          <article className="shortlist__column">
            <ClearOutlinedIcon/>
          </article>
        </article>
      </section>
    </section>
  )
}

export default ProjectShortlist;
