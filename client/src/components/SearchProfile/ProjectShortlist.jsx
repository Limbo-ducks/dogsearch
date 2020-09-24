import React from 'react'
import './ProjectShortlist.scss'
import BlankImage from '../../assets/images/blank-profile-picture.png'

import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import DateRangeIcon from '@material-ui/icons/DateRange';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
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
            <h4>Image</h4>
          </article>
          <article className="shortlist__column"><h4>Role</h4></article>
          <article className="shortlist__column"><h4>Three</h4></article>
          <article className="shortlist__column"><h4>Availability</h4></article>
          <article className="shortlist__column"><h4>Request</h4></article>
          <article className="shortlist__column"><h4>Contact</h4></article>
          <article className="shortlist__column"><h4>Remove</h4></article>
        </article>
        <article className="shortlist__row">
          <article className="shortlist__column">
              <img src={BlankImage} alt=""/>
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
              <img src={BlankImage} alt=""/>
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
              <img src={BlankImage} alt=""/>
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
              <img src={BlankImage} alt=""/>
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
              <img src={BlankImage} alt=""/>
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
              <img src={BlankImage} alt=""/>
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
