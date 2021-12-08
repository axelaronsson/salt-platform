import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Videos from "./Videos";
import Github from "./Github";
import Slides from "./Slides";
import styles from '../styles/pages.module.css';
import axios from "axios";

const LabsList = () => {
  const [status, setStatus] = useState(false);
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
  const router = useRouter();

  const checkAuth = async () => {
    const res = await fetch('http://localhost:3000/api/github')
    if (res.ok) {
      return setStatus(res.ok);
    } else {
      setStatus(false);
      return router.push('/loggedOut');
    }
  };

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
    checkAuth();
    fetchGithub();
    fetchSlides();
    fetchVideos();
    return () => { }
  }, []);

  const handleGithubFormSubmit = async (e) => {
    e.preventDefault();
    const newRepo = {
      description: githubDescription,
      link: githubLink
    };
    await axios.post('http://localhost:3000/api/github', newRepo);
    fetchGithub();
    setGithubToggle(show => !show);
    setGithubLink('');
    setGithubDescription('');
  };

  const handleSlidesFormSubmit = async (e) => {
    e.preventDefault();
    const newSlides = {
      description: slidesDescription,
      link: slidesLink
    };
    await axios.post('http://localhost:3000/api/slides', newSlides);
    fetchSlides();
    setSlidesToggle(show => !show);
    setSlidesLink('');
    setSlidesDescription('');
  };

  const handleVideosFormSubmit = async (e) => {
    e.preventDefault();
    const newVideo = {
      description: videoDescription,
      link: videoLink
    };
    await axios.post('http://localhost:3000/api/videos', newVideo);
    fetchVideos();
    setVideosToggle(show => !show);
    setVideoLink('');
    setVideoDescription('');
  };

  return (
    <div className={styles.container}>
      {status ? (<>
        <div className={styles.title}>
          <h1 className={styles.labs__header}> Labs</h1>
          <h1></h1>
        </div>
        <div className={styles.description}>
          <p className={styles.p}>a solid understanding of the bootcamps labs and
            is guranteed to give you a better tests.</p>
          <p></p>
        </div>

        <h2>Github</h2>
        <div className={styles.icons}>
          {githubLinks.map((github, index) => <Github key={index} github={github} />)}
        </div>
        {!githubToggle && (
          <button className={styles.button} onClick={() => setGithubToggle(show => !show)}>Add Repo</button>
        )}
        {githubToggle && (
          <form onSubmit={handleGithubFormSubmit}>
            <label><strong>Description: </strong></label>
            <input value={githubDescription} onChange={({ target: { value } }) => setGithubDescription(value)} />
            <label> <strong>Repo Link: </strong></label>
            <input value={githubLink} onChange={({ target: { value } }) => setGithubLink(value)} />
            <button className={styles.button} type='submit'>Add</button>
          </form>
        )}

        <h2>Slides</h2>
        <div className={styles.icons}>
          {slides.map((slide, index) => <Slides key={index} slide={slide} />)}
        </div>
        {!slidesToggle && (
          <button className={styles.button} onClick={() => setSlidesToggle(show => !show)}>Add Slides</button>
        )}
        {slidesToggle && (
          <form onSubmit={handleSlidesFormSubmit}>
            <label><strong>Description: </strong></label>
            <input value={slidesDescription} onChange={({ target: { value } }) => setSlidesDescription(value)} />
            <label> <strong>Slides Link: </strong></label>
            <input value={slidesLink} onChange={({ target: { value } }) => setSlidesLink(value)} />
            <button className={styles.button} type='submit'>Add</button>
          </form>
        )}

        <h2>Videos</h2>
        <div className={styles.icons}>
          {videos.map((video, index) => <Videos key={index} video={video} />)}
        </div>
        {!videosToggle && (
          <button className={styles.button} onClick={() => setVideosToggle(show => !show)}>Add Video</button>
        )}
        {videosToggle && (
          <form onSubmit={handleVideosFormSubmit}>
            <label><strong>Description: </strong></label>
            <input value={videoDescription} onChange={({ target: { value } }) => setVideoDescription(value)} />
            <label> <strong>Video Link: </strong></label>
            <input value={videoLink} onChange={({ target: { value } }) => setVideoLink(value)} />
            <button className={styles.button} type='submit'>Add</button>
          </form>
        )}
      </>) : ''}
    </div>
  )
}

export default LabsList
