import { useState, useEffect } from "react";
import NavPrivate from "../components/NavPrivate";
import Videos from "../components/Videos";
import Github from "../components/Github";
import Slides from "../components/Slides";
import styles from '../styles/pages.module.css';

const labs = () => {
  const [slides, setSlides] = useState([]);
  const [videos, setVideos] = useState([]);
  const [githubLinks, setGithub] = useState([]);
  const [githubDescription, setGithubDescription] = useState('');
  const [githubLink, setGithubLink] = useState('');
  const [slidesDescription, setSlidesDescription] = useState('');
  const [slidesLink, setSlidesLink] = useState('');
  const [videoDescription, setVideoDescription] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [githubToggle, setGithubToggle] = useState(false);
  const [slidesToggle, setSlidesToggle] = useState(false);
  const [videosToggle, setVideosToggle] = useState(false);

  const fetchVideos = async () => {
    const res = await fetch('http://localhost:3000/api/videos')
    const allVideos = await res.json();
    setVideos(allVideos);
    return allVideos;
  };

  const fetchGithub = async () => {
    const res = await fetch('http://localhost:3000/api/github')
    const allGithub = await res.json();
    setGithub(allGithub);
    return allGithub;
  };

  const fetchSlides = async () => {
    const res = await fetch('http://localhost:3000/api/slides')
    const allSlides = await res.json();
    setSlides(allSlides);
    return allSlides;
  };

  useEffect(() => {
    fetchVideos();
    fetchSlides();
    fetchGithub();
    return () => {
    }
  }, []);

  const handleGithubFormSubmit = (e) => {
    e.preventDefault();
    console.log(githubDescription, githubLink);
    setGithubToggle(show => !show);
    setGithubLink('');
    setGithubDescription('');
  };

  const handleSlidesFormSubmit = (e) => {
    e.preventDefault();
    console.log(slidesDescription, slidesLink);
    setSlidesToggle(show => !show);
    setSlidesLink('');
    setSlidesDescription('');
  };

  const handleVideosFormSubmit = (e) => {
    e.preventDefault();
    console.log(videoDescription, videoLink);
    setVideosToggle(show => !show);
    setVideoLink('');
    setVideoDescription('');
  };

  return (
    <div className={styles.container}>
      <NavPrivate />

      <h2>Github</h2>
      {!githubToggle &&(
       <button onClick={()=>setGithubToggle(show => !show)}>Add Repo</button> 
      )}
      {githubToggle && (
        <form onSubmit={handleGithubFormSubmit}>
          <label>Description:</label>
          <input value={githubDescription} onChange={({ target: { value } }) => setGithubDescription(value)} />
          <label>Repo Link:</label>
          <input value={githubLink} onChange={({ target: { value } }) => setGithubLink(value)} />
          <button type='submit'>Add</button>
        </form>
      )}
      <div className={styles.icons}>
        {githubLinks.map((github, index) => <Github key={index} github={github} />)}
      </div>

      <h2>Slides</h2>
      {!slidesToggle &&(
       <button onClick={()=>setSlidesToggle(show => !show)}>Add Slides</button> 
      )}
      {slidesToggle && (
        <form onSubmit={handleSlidesFormSubmit}>
          <label>Description:</label>
          <input value={slidesDescription} onChange={({ target: { value } }) => setSlidesDescription(value)} />
          <label>Repo Link:</label>
          <input value={slidesLink} onChange={({ target: { value } }) => setSlidesLink(value)} />
          <button type='submit'>Add</button>
        </form>
      )}
      <div className={styles.icons}>
        {slides.map((slide, index) => <Slides key={index} slide={slide} />)}
      </div>

      <h2>Videos</h2>
      {!videosToggle &&(
       <button onClick={()=>setVideosToggle(show => !show)}>Add Video</button> 
      )}
      {videosToggle && (
        <form onSubmit={handleVideosFormSubmit}>
          <label>Description:</label>
          <input value={videoDescription} onChange={({ target: { value } }) => setVideoDescription(value)} />
          <label>Repo Link:</label>
          <input value={videoLink} onChange={({ target: { value } }) => setVideoLink(value)} />
          <button type='submit'>Add</button>
        </form>
      )}
      <div className={styles.icons}>
        {videos.map((video, index) => <Videos key={index} video={video} />)}
      </div>
    </div>
  )
}

export default labs;
