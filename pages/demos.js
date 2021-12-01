import { useState, useEffect } from "react";
import Demos from "../components/Demos";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';

const demos = () => {
  const [demosList, setDemosList] = useState([]);
  const [demoLink, setDemoLink] = useState('');
  const [demoDescription, setDemoDescription] = useState('');
  const [demoToggle, setDemoToggle] = useState(false);

  const fetchDemos = async () => {
    const res = await fetch('http://localhost:3000/api/demos')
    const allDemos = await res.json();
    setDemosList(allDemos);
    return allDemos;
  };

  useEffect(() => {
    fetchDemos()
    return () => {
    }
  }, []);

  const handleDemoFormSubmit = (e) => {
    e.preventDefault();
    console.log(demoDescription, demoLink);
    setDemoToggle(show => !show);
    setDemoLink('');
    setDemoDescription('');
  };

  return (
    <div className={styles.container}>
      <NavPrivate />
      <h1>Demos</h1>
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
    </div>
  )
};

export default demos;
