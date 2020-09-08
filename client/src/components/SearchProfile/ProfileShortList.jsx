import React from "react";
import './ProfileShortList.scss';
import 'react-calendar/dist/Calendar.css';
import ExampleImageOne from '../../assets/images/1.jpg'


const ProfileShortList = () => {
  return (
    <section className="shortlist">
      <article className="shortlist__person">
        <article className="shortlist__person__img">
          <img src={ExampleImageOne} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="shortlist__person">
        <article className="shortlist__person__img">
          <img src={ExampleImageOne} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="shortlist__person">
        <article className="shortlist__person__img">
          <img src={ExampleImageOne} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
      <article className="shortlist__person">
        <article className="shortlist__person__img">
          <img src={ExampleImageOne} alt=""/>
        </article>
        <h3>Stuntman</h3>
      </article>
    </section>
  )
}

export default ProfileShortList;
