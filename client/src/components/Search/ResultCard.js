import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal } from '@material-ui/core'

function ResultCard (props) {
  const [open, setOpen] = useState(false)

  const handleToggle = bool => () => {
    setOpen(bool)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleToggle(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <article style={{ backgroundColor: 'white' }}>
          <img src={props.image} alt='profile-pic'/>
          <p>{props.name}</p>
          <p>{props.height}</p>
          <p>{props.eyeColor}</p>
          <p>{props.gender}</p>
          <Link to={`/talents/${props.id}`}>View Profile</Link>
        </article>
      </Modal>
      <div onClick={handleToggle(true)}>
        <img src={props.image} alt='profile-pic'/>
      </div>
    </>
  )
}
export default ResultCard
