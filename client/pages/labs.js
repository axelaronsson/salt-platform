import { useState, useEffect } from "react"
import Videos from "../components/Videos"
import Slides from "../components/Slides"

const labs = () => {
  const [videos, setVideos] = useState([]);
  const [slides, setSlides] = useState([]);

  const fetchVideos = async () =>{
   const res = await fetch('http://localhost:4000/api/videos')
   const allVideos = await res.json();
   setVideos(allVideos)
   return allVideos;
  }
  const fetchSlides = async () =>{
    const res = await fetch('http://localhost:4000/api/slides')
    const allSlides = await res.json();
    setSlides(allSlides)
    return allSlides;
   }
  useEffect(() => {
    fetchVideos();
    fetchSlides();
    return () => {
    }
  }, [])
  return (
    <div>
    
      labs Page
      {slides.map(slide => <Slides slide={slide} />)}
      {videos.map(video => <Videos video={video} />)}
    </div>
  )
}

export default labs
