import { useState, useEffect } from "react"
import Videos from "../components/Videos"
const labs = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () =>{
   const res = await fetch('http://localhost:4000/api/videos')
   const allVideos = await res.json();
   setVideos(allVideos)
   return allVideos;
  }
  useEffect(() => {
    fetchVideos();
    return () => {
    }
  }, [])
  return (
    <div>
    
      labs Page
      {videos.map(video => <Videos video={video} />)}
    </div>
  )
}

export default labs
