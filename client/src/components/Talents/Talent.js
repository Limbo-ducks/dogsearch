import React, { useState, useEffect } from 'react'
import ProfileCard from './ProfileCard'
import InfoSection from './InfoSection'

const Talent = (props) => {
  const baseURL = '/api/profiles/'
  const id = props.match.params.id
  const [data, setData] = useState([])
  const [status, setStatus] = useState('loading')

  useEffect(() => {
    fetch(baseURL + id)
      .then(res => res.json())
      .then(data => setData(data))
      .catch(console.log)
      .finally(() => setStatus('idle'))
  }, [id])

  if (status === 'loading') return <div>Hi</div>

  return (
    <div className='m-40'>
      <ProfileCard data={data}/>
      <h1>{data.name}</h1>
      <InfoSection data={data} />
      <img src={data.image} alt='profile-pic'/>
    </div>
  )
}

export default Talent
