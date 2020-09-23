import React from "react";
import './ProfileCalendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { isSameDay } from "date-fns";

const ProfileCalendar = () => {
  const [calendar, setCalendar] = React.useState({ date: '' });

  const disabledDates = [new Date(2020, 8, 20), new Date(2020, 8, 22), new Date(2020, 8, 19)]
  const availableDates = [new Date(2020, 8, 15)]

  const onChange = date => {
    const day = date.toDateString()
    setCalendar({ date: day })
  }

  const tileDisabled = ({ date, view }) => {
    if( view === 'month') {
      return disabledDates.find(dDate => isSameDay(dDate, date))
    }
  }

  const tileClassName = ({ date, view }) => {
    if(view === 'month') {
      if(disabledDates.find(dDate => isSameDay(dDate, date))) {
        return 'calendar__unavailable'
      } else if (availableDates.find(aDate => isSameDay(aDate, date))) {
        return 'calendar__available'
      }
    }
  }

  return (
    <section className="content">
      <Calendar onChange={onChange} tileDisabled={tileDisabled} tileClassName={tileClassName}/>
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
            <h3>Not set</h3>
          </article>
      </section>
      <section className="calendar__day">
        <article className="calendar__day__info">
          <article className="calendar__day__info__text">
            <h3>{calendar.date}</h3>
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
