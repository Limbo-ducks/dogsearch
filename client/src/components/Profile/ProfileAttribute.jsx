import React from 'react'
import './ProfileAttributes.scss'

const ProfileAttribute = ({data, label, unit ,odd = false}) => {
    return(
        <article 
          className={`content__attributes__list__row ${odd?'content__attributes__list__row--odd':null} `}>
          <article>
            <p className="capitalise"><b>{label[0]}:</b> {Array.isArray(data[0]) ? data[0].join(' ,') : data[0]}{unit[0]}</p>
          </article>
          {data[1] ? 
              <article>
                 <p className="capitalise"><b className="attributes__thick">{label[1]}:</b> {Array.isArray(data[1]) ? data[1].join(' ,') : data[1]}{unit[1]}</p>
              </article>
            : null}
         
        </article>
    )
}

export default ProfileAttribute