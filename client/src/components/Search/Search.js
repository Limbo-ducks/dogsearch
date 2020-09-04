import React, { useState, useEffect } from 'react'
import ResultList from './ResultList'
import Filter from './Filter.jsx'

const makeOpts = (body, method = 'GET') => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body
})

const Search = ({ match: { params: { credit }}}) => {
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
    <section className='mt-20 mb-8'>
      <Filter search={search} searchCredit={credit} />
      <ResultList data={hits} />
    </section>
  )
}

export default Search
