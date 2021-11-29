import { useState, useEffect } from "react"
import NavPrivate from "../components/NavPrivate";
import Videos from "../components/Videos"
<<<<<<< HEAD
import Github from "../components/Github"

const labs = () => {
  const [videos, setVideos] = useState([]);
  const [githubLinks, setGithub] = useState([]);
=======
import Slides from "../components/Slides"

const labs = () => {
  const [videos, setVideos] = useState([]);
  const [slides, setSlides] = useState([]);
>>>>>>> main

  const fetchVideos = async () =>{
   const res = await fetch('http://localhost:4000/api/videos')
   const allVideos = await res.json();
   setVideos(allVideos)
   return allVideos;
  }
<<<<<<< HEAD
  const fetchGithub = async () =>{
    const res = await fetch('http://localhost:4000/api/github')
    const allGithub = await res.json();
    setGithub(allGithub)
    return allGithub;
   }
  useEffect(() => {
    fetchVideos();
    fetchGithub();
=======
  const fetchSlides = async () =>{
    const res = await fetch('http://localhost:4000/api/slides')
    const allSlides = await res.json();
    setSlides(allSlides)
    return allSlides;
   }
  useEffect(() => {
    fetchVideos();
    fetchSlides();
>>>>>>> main
    return () => {
    }
  }, [])
  return (
    <div>
<<<<<<< HEAD
    
      labs Page
      {videos.map(video => <Videos video={video} />)}
      {githubLinks.map(github => <Github github={github} />)}
=======
      <NavPrivate />
      {slides.map(slide => <Slides slide={slide} />)}
      {videos.map((video, index) => <Videos video={video} key={index}/>)}
>>>>>>> main
    </div>
  )
}

export default labs
