import React from 'react'

const FilmCredit = ({data}) => {
    return (
        <article className="content__cv__acting">
            <h3>Film: {data.title}, {data.year}</h3>
            <p>Role: {data.castType || data.role} </p>
            {data.character ? <p>Character: {data.character}</p> : null}
        </article>
    )
}
export default FilmCredit
