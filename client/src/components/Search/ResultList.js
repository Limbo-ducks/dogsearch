import React, { useState } from 'react'
import ResultCard from './ResultCard'
import Pagination from '@material-ui/lab/Pagination'

function ResultList (props) {
  const [page, setPage] = useState(1)

  const count = props.data.length
  const pages = Math.ceil(count / 16)
  const start = 16 * (page - 1)
  const end = 16 * page

  return (
    <div>
      {props.data
        .slice(start, end)
        .map(profile => {
          return <ResultCard {...profile} key={JSON.stringify(profile)} />
        })}
      <Pagination count={pages} onChange={(_, p) => setPage(p)} />
    </div>
  )
}
export default ResultList
