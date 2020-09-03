import React from 'react'
import ResultCard from './ResultCard'
import './ResultList.scss';

function ResultList (props) {
  return (
    <article className="talentwrapper">
      {props.data.map(profile => {
        return <ResultCard {...profile} key={JSON.stringify(profile)} />
      })}
    </article>
  )
}
export default ResultList
