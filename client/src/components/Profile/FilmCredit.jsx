import React from 'react'

const FilmCredit = ({data}) => {
    return (
        <article className="content__cv__acting">
            <h3><b>Film:</b> {data.title}, {data.year}</h3>
            <p><b>Role:</b> {data.castType || data.role} </p>
            {data.character ? <p><b>Character:</b> {data.character}</p> : null}
        </article>
    )
}
export default FilmCredit
