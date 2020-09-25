import React from "react";
import './SearchProfileCalendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { isSameDay, parseISO } from "date-fns";
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

import Blank from '../../assets/images/blank-profile-picture.png';

const SearchProfileCalendar = ({ viewCalendar, available, unavailable }) => {
  const [calendar, setCalendar] = React.useState({ 
    date: '', 
    pending: false,
    meeting: false,
    meetinginfo: false
  });

  const disabledDates = unavailable;
  const availableDates = available;

  const onClickDay = (value, event) => {
    const day = value.toDateString()
    if(event.currentTarget.classList.contains('calendar__pending')){
      setCalendar({ 
        ...calendar,
        date: day, 
        meeting: true,
        pending: true,
        meetinginfo: false
      })
    } else if(event.currentTarget.classList.contains('calendar__available')){
      setCalendar({ 
        ...calendar,
        date: day, 
        meeting: true,
        pending: false,
        meetinginfo: false
      })
    } else if(event.currentTarget.classList.contains('calendar__notset')){
      setCalendar({ 
        ...calendar,
        date: day, 
        meeting: false,
        pending: false,
        meetinginfo: false
      })
    }
  }

  const tileClassName = ({ date, view }) => {
    if(view === 'month') {
      if(disabledDates.find(dDate => isSameDay(parseISO(dDate), date))) {
        return 'calendar__pending'
      } else if (availableDates.find(aDate => isSameDay(parseISO(aDate), date))) {
        return 'calendar__available'
      } else {
        return 'calendar__notset'
      }
    }
  }

  const showInfo = () => {
    setCalendar({
      ...calendar,
      meetinginfo: true
    })
  }

  return (

    <section className="contentmodal contentmodal--calendar">
      <section className="contentmodal--calendar--wrapper">
      <article onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            viewCalendar(e.currentTarget)
            }} className="contentmodal__exit"><CancelOutlinedIcon/>
      </article>
      <article className="modal__calendar">
        <Calendar tileClassName={tileClassName} onClickDay={onClickDay}/>
        <section className="calendar__instructions">
          <article className="calendar__instructions__item calendar__instructions--planned">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--available"></article>
            <h5>Planned day</h5>
          </article>
          <article className="calendar__instructions__item  calendar__instructions--pending">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--booked"></article>
            <h5>Pending request</h5>
          </article>
          <article className="calendar__instructions__item  calendar__instructions--unknown">
            <article className="calendar__instructions__item__box calendar__instructions__item__box--unknown"></article>
            <h5>Nothing planned</h5>
          </article>
        </section>
      </article>
      
      <section className="modal__calendarinfo">
          <h3 className="modal__calendarinfo__date">{calendar.date}</h3>
          <table>              
            <tr>
              <th><h5>Time</h5></th>
              <th><h5>Description</h5></th> 
              <th><h5>Action</h5></th>
            </tr>
          </table>
          <section className="modal__calendarinfo__day">
            <table>
              <tr>
                <td>08.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>08.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr className={`calendar__row calendar__row--${calendar.meeting}`} onClick={showInfo}>
                <td>09.00</td>
                <td>{calendar.meeting ? <h5>Meeting planned</h5> : null}</td>
                <td>{calendar.meeting ? <InfoOutlinedIcon/> : null }</td>
              </tr>
              <tr>
                <td>09.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>10.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr className={`calendar__row calendar__row--${calendar.pending}--pending`}>
                <td>10.30</td>
                <td>{calendar.pending ? <h5>Pending request</h5> : null}</td>
                <td>{calendar.pending ? <VideocamOutlinedIcon/> : null }</td>
              </tr>
              <tr>
                <td>11.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>11.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>12.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>13.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>13.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>14.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>15.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>15.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>16.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>16.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>17.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>17.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>18.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>18.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>19.00</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>19.30</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>20.00</td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </section>
      </section>

      {calendar.meetinginfo ?         
        <section className="modal__calendarinfo__details">
          <h3>Information</h3>
          <article className="calendarinfotalent">
            <h4>Talent:</h4>
            <img src={Blank} alt="" className="calendarinfotalent__image"/>
            <article className="calendarinfotalent__links">
              <article className="calendarinfotalent__links__button"><PersonOutlineIcon/></article>
              <article className="calendarinfotalent__links__button"><MailOutlineIcon/></article>
            </article>
          </article>
          <article></article>
          <h4>Project:</h4><p> Example</p>
          <h4>Time:</h4><p> 09.00</p>
          <h4>Location:</h4><p> Online <a>link</a></p>
          <h4>Description:</h4><p> Example</p>
        </section> : null }

      </section>
    </section>
  )
}

export default SearchProfileCalendar;
