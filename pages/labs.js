import { useState, useEffect } from "react"
import NavPrivate from "../components/NavPrivate";
import Videos from "../components/Videos";
import Github from "../components/Github";
import Slides from "../components/Slides";
import styles from '../styles/pages.module.css'

const labs = () => {
  const [slides, setSlides] = useState([]);
  const [videos, setVideos] = useState([]);
  const [githubLinks, setGithub] = useState([]);


  const fetchVideos = async () =>{
   const res = await fetch('http://localhost:3000/api/videos')
   const allVideos = await res.json();
   setVideos(allVideos)
   return allVideos;
  };

  const fetchGithub = async () =>{
    const res = await fetch('http://localhost:3000/api/github')
    const allGithub = await res.json();
    setGithub(allGithub)
    return allGithub;
   };

   const fetchSlides = async () =>{
     const res = await fetch('http://localhost:3000/api/slides')
     const allSlides = await res.json();
     setSlides(allSlides)
     return allSlides;
    };
  
  useEffect(() => {
    fetchVideos();
    fetchSlides();
    fetchGithub();
    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      <NavPrivate />
      <h2>Github</h2>
      <div className={styles.icons}>
      {githubLinks.map(github => <Github github={github} />)}
      </div>
      <h2>Slides</h2>
      <div className={styles.icons}>
      {slides.map(slide => <Slides slide={slide} />)}
      </div>
      <h2>Videos</h2>
      <div className={styles.icons}>
      {videos.map(video => <Videos video={video} />)}
      </div>
    </div>
  )
}

export default labs;
