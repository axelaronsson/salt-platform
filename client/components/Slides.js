import React from 'react'

const Slides = ({slide}) => {
  return (
    <div>
      <a target='_blank' href={slide.link}><img src='https://i.ibb.co/pfjKf76/Google-Slides-logo-2014-2020-svg.png'></img></a>
    </div>
  )
}

export default Slides