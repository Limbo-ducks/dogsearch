import React from 'react'

const ProfileAttribute = ({data, label, unit ,odd = false}) => {
    return(
        <article className={`content__attributes__list__row ${odd?'content__attributes__list__row--odd':null}`}>
          <article>
            <p>{label[0]}: {Array.isArray(data[0]) ? data[0].join(' ,') : data[0]}{unit[0]}</p>
          </article>
          {data[1] ? 
              <article>
                 <p>{label[1]}: {Array.isArray(data[1]) ? data[1].join(' ,') : data[1]}{unit[1]}</p>
              </article>
            : null}
         
        </article>
    )
}

export default ProfileAttribute