import { useState, useEffect } from "react";
import router from 'next/router';
import Link from "next/dist/client/link";
import Demos from "./Demos";
import NavPrivate from "./NavPrivate";
import styles from '../styles/pages.module.css';
import axios from "axios";

const DemosContainer = () => {
  const [role, setRole] = useState('');
  const [isGranted, setIsGranted] = useState(false);
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

  const checkAuth = async () => {
    const res = await fetch('http://localhost:3000/api/users/authorize');
    const userAuth = await res.json();
    if (res.ok) {
      setRole(userAuth.role);
      setIsGranted(res.ok);
      fetchDemos();
    } else {
      router.push('/loggedOut')
    }
  }

  useEffect(() => {
    checkAuth();
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
      { isGranted ? (<>
      <NavPrivate />
      <div className={styles.title}>
      <h1 className={styles.demos__header}>Demos</h1>
      <h1></h1>
      </div>
      <div className={styles.description}>
      <p className={styles.p}>The place where you can submit your demos so other colleagues can benefit from them.</p>
      <p className={styles.helper}></p>
      </div>
      <div className={styles.icons}>
        {demosList.map((demo, index) => <Demos key={index} demo={demo} />)}
      </div>
      { role === 'admin' ? <>
      {!demoToggle && (
        <button className={styles.button} onClick={() => setDemoToggle(show => !show)}>Add Demo</button>
      )}
      </> : ''}
      {demoToggle && (
        <form onSubmit={handleDemoFormSubmit}>
        <label><strong>Description: </strong></label>
          <input value={demoDescription} onChange={({ target: { value } }) => setDemoDescription(value)} />
          <label> <strong>Demo Link: </strong></label>
          <input value={demoLink} onChange={({ target: { value } }) => setDemoLink(value)} />
          <button className={styles.button} type='submit'>Add</button>
        </form>
      )}
      </>) : ''}
      <div className={styles.back}>
      <Link href="/landingPage"><a>&lt;-- back to the main page</a></Link>
      </div>
    </div>
  )
};

export default DemosContainer;
