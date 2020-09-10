import React, { useState, useEffect } from 'react'
import Filter from './Filter'
import ResultList from './ResultList'

const makeOpts = (body, method = 'GET') => ({
  method,
  headers: {
    'Content-Type': 'application/json'
  },
  body
})

const Search = ({ hits, setHits, user, match: { params: { credit }}}) => {
  const baseURL = '/api/search'
  const [status, setStatus] = useState('idle')
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const search = query => {
    setSearchQuery(JSON.stringify(query))
    setSearchPerformed(true);
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
      <h1>Browse Talent Profiles</h1>
      <div className='flex flex-row'>
        <Filter search={search} searchCredit={credit} />
        <ResultList data={hits} status={status} searchPerformed={searchPerformed} user={user} />
      </div>
    </section>
  )
}

export default Search
