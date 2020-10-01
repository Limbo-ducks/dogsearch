import React from "react";
import './ProfileFavourites.scss';
import 'react-calendar/dist/Calendar.css';
import Blank from '../../assets/images/blank-profile-picture.png'


const ProfileFavourites = () => {
  return (
    <section className="profilefavourites">
      <article className="profilefavourites__dog">
        <article className="profilefavourites__dog__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Dog</h3>
      </article>
      <article className="profilefavourites__dog">
        <article className="profilefavourites__dog__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Dog</h3>
      </article>
      <article className="profilefavourites__dog">
        <article className="profilefavourites__dog__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Dog</h3>
      </article>
      <article className="profilefavourites__dog">
        <article className="profilefavourites__dog__img">
          <img src={Blank} alt=""/>
        </article>
        <h3>Dog</h3>
      </article>
      <article>
      </article>
    </section>
  )
}

export default ProfileFavourites;
