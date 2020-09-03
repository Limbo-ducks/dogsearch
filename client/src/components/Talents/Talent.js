import React, { useState, useEffect } from 'react'

const Talent = (props) => {
  const baseURL = '/api/profiles/'
  const id = props.match.params.id;
  const [hits, setHits] = useState([])

  useEffect(() => {
    fetch(baseURL + id)
      .then(res => res.json())
      .then(data => setHits(data))
      .catch(console.log)
  }, [])

  return (
    <div className='m-40'>
      <h1>{hits.name}</h1>
      <img src={hits.image} alt='profile-pic'/>
    </div>
  )
}

export default Talent
