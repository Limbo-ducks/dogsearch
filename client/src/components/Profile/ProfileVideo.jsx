import React from 'react'
import ReactPlayer from 'react-player/lazy'
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import './ProfileVideo.scss'

const ProfileVideo = ({data}) => {
  const [playing, setPlaying] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState(data.mediaReel);

  const setVideo = (url) => {
      setVideoUrl(url);
      setPlaying(true);
  }

  return (
    <section className="content__video">
      <ReactPlayer url={videoUrl} width="100%" height="315px" playing={playing} controls="true"/>
      <ul className="content__video__list">
        <li onClick={() => setVideo("https://player.vimeo.com/video/402940166")}><VideocamOutlinedIcon/> Theatre reel</li>
        <li><VideocamOutlinedIcon /> Character reel</li>
        <li><VideocamOutlinedIcon /> Commercial reel</li>
        <li><VideocamOutlinedIcon /> Various</li>
        <li><VideocamOutlinedIcon /> Film clip</li>
      </ul>
    </section>
  )
}

export default ProfileVideo
