import React from "react";
import './ProfileCalendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';


const ProfileCalendar = () => {
  return (
    <section className="content">
      <Calendar />
      <section className="calendar__instructions">
          <article className="calendar__instructions__item calendar__instructions--available">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--available"></article>
            <h3>Available</h3>
          </article>
          <article className="calendar__instructions__item  calendar__instructions--booked">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--booked"></article>
            <h3>Booked</h3>
          </article>
          <article className="calendar__instructions__item  calendar__instructions--unknown">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--unknown"></article>
            <h3>Unknown</h3>
          </article>
      </section>
      <section className="calendar__day">
        <article className="calendar__day__info">
          <article className="calendar__day__info__text">
            <h3>11 September</h3>
            <p>The talent has not provided any information about availability.</p>
          </article>
        </article>
        <article className="calendar__day__contact">
          <MailOutlineIcon/>
        </article>
      </section>
    </section>
  )
}

export default ProfileCalendar;
