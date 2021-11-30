import React from 'react'

const Videos = ({video}) => {
  return (
    <div>
      <a target='_blank' href={video.link}><img src='https://i.postimg.cc/6QZTyfkN/2.png'></img></a>
    </div>
  )
}

export default Videos
