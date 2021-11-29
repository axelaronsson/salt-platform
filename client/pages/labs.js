import { useState, useEffect } from "react"
import NavPrivate from "../components/NavPrivate";
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
      <NavPrivate />
      {videos.map((video, index) => <Videos video={video} key={index}/>)}
    </div>
  )
}

export default labs
