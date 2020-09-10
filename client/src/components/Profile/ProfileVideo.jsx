import React from 'react'
import ReactPlayer from 'react-player/lazy'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import './ProfileVideo.scss'

const ProfileVideo = ({data}) => {
  console.log(data)
  return (
    <section className="content__video">
      <ReactPlayer url={data.mediaReel} width="100%" height="315px" controls="true"/>
      <article className="content__description">
        <h4>Description:</h4>
        <h4>Length:</h4>
      </article>
      <ul className="content__video__list">
        <li><VideocamOutlinedIcon /> Theatre reel</li>
        <li><VideocamOutlinedIcon /> Character reel</li>
        <li><VideocamOutlinedIcon /> Commercial reel</li>
        <li><VideocamOutlinedIcon /> Various</li>
        <li><VideocamOutlinedIcon /> Film clip</li>
      </ul>
    </section>
  )
}

export default ProfileVideo
