import { useState, useEffect } from "react";
import router from 'next/router';
import Demos from "../components/Demos";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';
import axios from "axios";

const demos = () => {
  const [status, setStatus] = useState(false);
  const [demosList, setDemosList] = useState([]);
  const [demoLink, setDemoLink] = useState('');
  const [demoDescription, setDemoDescription] = useState('');
  const [demoToggle, setDemoToggle] = useState(false);

  const fetchDemos = async () => {
    const res = await fetch('http://localhost:3000/api/demos')
    const allDemos = await res.json();
    await setDemosList(allDemos);
    setStatus(res.ok);
    if (!res.ok) {
      router.push('/loggedOut')
    }
    return allDemos;
  };

  useEffect(() => {
    fetchDemos()
    return () => {
    }
  }, []);

  const handleDemoFormSubmit = async (e) => {
    e.preventDefault();
    const newDemo = {
     description: demoDescription,
     link: demoLink
    };
    await axios.post('http://localhost:3000/api/demos', newDemo);
    setDemoToggle(show => !show);
    fetchDemos();
    setDemoLink('');
    setDemoDescription('');
  };

  return (
    <div className={styles.container}>
      { status ? (<>
      <NavPrivate />
      <div className={styles.title}>
      <h1 className={styles.demos__header}>Demos</h1>
      <h1></h1>
      </div>
      <div className={styles.description}>
      <p className={styles.p}>place where you can submit your demos so other colleagues can benfit from it.</p>
      <p></p>
      </div>
      {!demoToggle && (
        <button className={styles.button} onClick={() => setDemoToggle(show => !show)}>Add Demo</button>
      )}
      {demoToggle && (
        <form onSubmit={handleDemoFormSubmit}>
        <label><strong>Description: </strong></label>
          <input value={demoDescription} onChange={({ target: { value } }) => setDemoDescription(value)} />
          <label> <strong>Demo Link: </strong></label>
          <input value={demoLink} onChange={({ target: { value } }) => setDemoLink(value)} />
          <button className={styles.button} type='submit'>Add</button>
        </form>
      )}
      <div className={styles.icons}>
        {demosList.map((demo, index) => <Demos key={index} demo={demo} />)}
      </div>
      </>) : ''}
    </div>
  )
};

export default demos;
