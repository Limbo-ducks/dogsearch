import React from "react";
import './ProfileCalendar.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ProfileCalendar = () => {
  return (
    <section className="content">
      <Calendar />
    </section>
  )
}

export default ProfileCalendar;
