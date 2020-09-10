import React, { useState } from 'react'
import ResultCard from './ResultCard'
import './ResultList.scss';
import Pagination from '@material-ui/lab/Pagination'
import Typography from '@material-ui/core/Typography';


function ResultList (props) {
  const [page, setPage] = useState(1)

  const count = props.data.length
  const pages = Math.ceil(count / 16)
  const start = 16 * (page - 1)
  const end = 16 * page

  return (
    <>
    {console.log(props.searchPerformed + 'TESTING EEEEE')}
    <article className="talentwrapper">
      {props.status === 'loading' ? 
      null :
      (props.data.length ? 
        props.data
        .slice(start, end)
        .map(profile => {
          return <ResultCard {...profile} user={props.user} key={JSON.stringify(profile)} />
        })
        : 
        (props.searchPerformed ?
        <Typography>No Results Were Found. Please Adjust Your Filter And Try Again</Typography> 
        : 
        <Typography>Make a Search to Find Talents</Typography>))}
    
      
      {props.status ==='idle' && props.data.length ? <Pagination count={pages} onChange={(_, p) => setPage(p)} /> : null }
    </article>
    </>
  )
}
export default ResultList
