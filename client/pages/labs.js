import { useState, useEffect } from "react"
import NavPrivate from "../components/NavPrivate";
import Videos from "../components/Videos"
import Github from "../components/Github"
import Slides from "../components/Slides"

const labs = () => {
  const [videos, setVideos] = useState([]);
  const [githubLinks, setGithub] = useState([]);
  const [slides, setSlides] = useState([]);

  const fetchVideos = async () => {
    const res = await fetch('http://localhost:4000/api/videos')
    const allVideos = await res.json();
    setVideos(allVideos)
    return allVideos;
  }
  const fetchGithub = async () => {
    const res = await fetch('http://localhost:4000/api/github')
    const allGithub = await res.json();
    setGithub(allGithub)
    return allGithub;
  }
  const fetchSlides = async () => {
    const res = await fetch('http://localhost:4000/api/slides')
    const allSlides = await res.json();
    setSlides(allSlides)
    return allSlides;
  }
  useEffect(() => {
    fetchVideos();
    fetchSlides();
    fetchGithub();
    return () => {
    }
  }, [])
  return (
    <div>
      <NavPrivate />
      {videos.map(video => <Videos video={video} />)}
      {githubLinks.map(github => <Github github={github} />)}
      {slides.map(slide => <Slides slide={slide} />)}
    </div>
  )
}

export default labs
