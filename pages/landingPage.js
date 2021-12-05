import NavPrivate from '../components/NavPrivate';
import Link from 'next/link'
import styles from '../styles/landnPage.module.css';
import { useState, useEffect } from 'react';
import router from 'next/router';


const landingPage = () => {

  const [status, setStatus] = useState(false);

  useEffect( async () => {
    const res = await fetch('http://localhost:3000/api/github')
    if (res.ok) {
      setStatus(true);
    } else {
      router.push('/signin');
    }
    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      { status ? (<>
      <NavPrivate />
      <Link href="/courses">
        <a>
          <div className={styles.courses}>
            <h1 className={styles.courses__text}>Courses</h1>
          </div>
        </a>
      </Link>

      <Link href="/labs">
        <a>
          <div className={styles.labs} >
            <h1 className={styles.labs__text}>Labs</h1>
          </div>
        </a>
      </Link>


      <Link href="/demos">
        <a>
          <div className={styles.demos}>
            <h1 className={styles.demos__text}>Demos</h1>
          </div>
        </a>
      </Link>
      </>) : <h3>Not logged in</h3>}
    </div>
  )
};

export default landingPage;
