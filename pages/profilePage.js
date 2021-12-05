import NavPrivate from "../components/NavPrivate";
import styles from '../styles/profile.module.css';
import { useState, useEffect } from 'react';
import router from 'next/router';

const profilePage = () => {

  const [status, setStatus] = useState(false);

  useEffect( async () => {
    const res = await fetch('http://localhost:3000/api/github')
    if (res.ok) {
      setStatus(res.ok);
    } else {
      setStatus(false);
      router.push('/loggedOut');
    }
    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      { status ? (<>
    <NavPrivate />
      Profile Page
      </>) : ''}
    </div>
  )
};

export default profilePage;
