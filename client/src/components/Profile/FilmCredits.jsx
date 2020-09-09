import React from 'react'
import FilmCredit from './FilmCredit'

const FilmCredits = ({data}) => {
    return(
        <section>
            <h3 className="content__title">Acting Credits</h3>

            {data.actingCredits.films.length > 0 ? 
            <div>
            <h4 className="content__header">Film</h4>
                {data.actingCredits.films.map(film => <FilmCredit data = {film}/>)}
            </div> : null}

            {data.actingCredits.theatre.length > 0 ?
            <div>
            <h4 className="content__header">Theatre</h4>
                {data.actingCredits.theatre.map(film => <FilmCredit data = {film}/>)}
            </div> : null
            }

            {data.actingCredits.tv.length > 0 ?
            <div>
            <h4 className="content__header">TV</h4>
                {data.actingCredits.tv.map(film => <FilmCredit data={film}/>)}
            </div> : null
            }

            <h3 className="content__title">Non Acting Credits</h3>

            {data.nonActingCredits.films.length > 0 ?
            <div>
                <h4 className="content__header">Film</h4>
            {data.nonActingCredits.films.map(film => <FilmCredit data = {film}/>)}
            </div> : null
            }

            {data.nonActingCredits.theatre.length > 0 ? 
            <div>
            <h4 className="content__header">Theatre</h4>
            {data.nonActingCredits.theatre.map(film => <FilmCredit data = {film}/>)}
            </div> : null
            }

            {data.nonActingCredits.nomination.length > 0 ? 
            <div>
            <h3 className="content__title">Nominations</h3>
            {data.nonActingCredits.nomination.map(film => <FilmCredit data = {film}/>)}</div> : null
}
        </section>
    )
}

export default FilmCredits