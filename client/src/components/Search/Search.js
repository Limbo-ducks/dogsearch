import React, { useState, useEffect } from 'react'
import ResultList from './ResultList'
import Filter from './Filter'

const makeOpts = (body, method = 'GET') => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body
})

const Search = () => {
  const baseURL = '/api/search'
  const [status, setStatus] = useState('idle')
  const [hits, setHits] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const search = query => {
    setSearchQuery(JSON.stringify(query))
    setStatus('loading')
  }

  useEffect(() => {
    if (status === 'loading') {
      fetch(baseURL, makeOpts(searchQuery, 'POST'))
        .then(res => res.json())
        .then(data => setHits(data))
        .catch(console.log)
        .finally(() => setStatus('idle'))
    }
  }, [status, searchQuery])

  return (
    <div>
      <Filter search={search} />
      <ResultList data={hits} />
    </div>
  )
}

export default Search
