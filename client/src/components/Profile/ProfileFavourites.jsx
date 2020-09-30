import React from "react";
import './ProfileFavourites.scss';
import 'react-calendar/dist/Calendar.css';
import ExampleImageOne from '../../assets/images/profile.jpg'
import Blank from '../../assets/images/blank-profile-picture.png'


const ProfileFavourites = () => {
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

export default ProfileFavourites;
