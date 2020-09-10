import React from "react";
import './ProfileShortList.scss';
import 'react-calendar/dist/Calendar.css';
import ExampleImageOne from '../../assets/images/1.jpg'
import Blank from '../../assets/images/blank-profile-picture.png'


const ProfileShortList = () => {
  return (
    <section className="profileshortlist">
      <article className="profileshortlist__person">
        <article className="profileshortlist__person__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="profileshortlist__person">
        <article className="profileshortlist__person__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="profileshortlist__person">
        <article className="profileshortlist__person__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="profileshortlist__person">
        <article className="profileshortlist__person__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article>
      </article>
    </section>
  )
}

export default ProfileShortList;
