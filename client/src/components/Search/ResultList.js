import React, { useState } from 'react'
import ResultCard from './ResultCard'
import './ResultList.scss';
import Pagination from '@material-ui/lab/Pagination'


function ResultList (props) {
  const [page, setPage] = useState(1)

  const count = props.data.length
  const pages = Math.ceil(count / 16)
  const start = 16 * (page - 1)
  const end = 16 * page

  return (
    <>
    <article className="dogwrapper">
      {props.status === 'loading' ? 
      null :
      (props.data.length ? 
        props.data
        .slice(start, end)
        .map(dog => {
          return <ResultCard {...dog} user={props.user} key={JSON.stringify(dog)} />
        })
        : 
        (props.searchPerformed ?
        <p className="errormessage">No Results Were Found. Please Adjust Your Filter And Try Again</p> 
        : 
        <p className="errormessage">Make a Search to Find A Dog to Adopt</p>))}
    
      
      {props.status ==='idle' && props.data.length ? <Pagination count={pages} onChange={(_, p) => setPage(p)} /> : null }
    </article>
    </>
  )
}
export default ResultList
