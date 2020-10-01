import React from 'react'
import ReactPlayer from 'react-player/lazy'
import './DogVideo.scss'

const DogVideo = ({data}) => {
  const [playing, setPlaying] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState(data.mediaReel);

  const setVideo = (url) => {
      setVideoUrl(url);
      setPlaying(true);
  }

  return (
    <section className="content__video">
      {videoUrl ? (<ReactPlayer url={videoUrl} width="100%" height="315px" playing={playing} controls={true}/>) 
      : <p>No video has been provided</p>}
    </section>
  )
}

export default DogVideo
