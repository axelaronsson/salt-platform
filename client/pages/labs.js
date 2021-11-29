import { useState, useEffect } from "react"
import Videos from "../components/Videos"
import Github from "../components/Github"

const labs = () => {
  const [videos, setVideos] = useState([]);
  const [githubLinks, setGithub] = useState([]);

  const fetchVideos = async () =>{
   const res = await fetch('http://localhost:4000/api/videos')
   const allVideos = await res.json();
   setVideos(allVideos)
   return allVideos;
  }
  const fetchGithub = async () =>{
    const res = await fetch('http://localhost:4000/api/github')
    const allGithub = await res.json();
    setGithub(allGithub)
    return allGithub;
   }
  useEffect(() => {
    fetchVideos();
    fetchGithub();
    return () => {
    }
  }, [])
  return (
    <div>
    
      labs Page
      {videos.map(video => <Videos video={video} />)}
      {githubLinks.map(github => <Github github={github} />)}
    </div>
  )
}

export default labs
