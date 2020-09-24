import React from 'react'
import FilmCredit from './FilmCredit'

const FilmCredits = ({data}) => {
    return(
        <section>
            <span id="actingcredits" className="spanscroll"></span>
            <h3 className="content__title" >Acting Credits</h3>

            {data.actingCredits && data.actingCredits.films.length > 0 ? 
            <div>
            <h4 className="content__header">Film</h4>
                {data.actingCredits.films.map((film, index) => <FilmCredit data = {film} key={index}/>)}
            </div> : null}

            {data.actingCredits && data.actingCredits.theatre.length > 0 ?
            <div>
            <h4 className="content__header">Theatre</h4>
                {data.actingCredits.theatre.map((film, index) => <FilmCredit data = {film} key={index}/>)}
            </div> : null ||null 
            }

            {data.actingCredits && data.actingCredits.tv.length > 0 ?
            <div>
            <h4 className="content__header">TV</h4>
                {data.actingCredits.tv.map((film, index) => <FilmCredit data={film} key={index}/>)}
            </div> : null
            }
            <span id="nonactingcredits" className="spanscroll"></span>
            <h3 className="content__title" >Non Acting Credits</h3>

            {data.actingCredits && data.nonActingCredits.films.length > 0 ?
            <div>
                <h4 className="content__header">Film</h4>
            {data.nonActingCredits.films.map((film, index) => <FilmCredit data = {film} key={index}/>)}
            </div> : null
            }

            {data.actingCredits && data.nonActingCredits.theatre.length > 0 ? 
            <div>
            <h4 className="content__header">Theatre</h4>
            {data.nonActingCredits.theatre.map((film, index) => <FilmCredit data = {film} key={index}/>)}
            </div> : null 
            }

            {data.actingCredits && data.nonActingCredits.nomination.length > 0 ? 
            <div>
            <h3 className="content__title">Nominations</h3>
            {data.nonActingCredits.nomination.map((film, index) => <FilmCredit data = {film} key={index}/>)}</div> : null
}
        </section>
    )
}

export default FilmCredits