import Link from 'next/link';
import styles from '../styles/landnPage.module.css';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const LandingPageList = () => {
  const [isGranted, setIsGranted] = useState(false);
  const router = useRouter();

  const checkAuth = async () => {
    const res = await fetch('http://localhost:3000/api/users/authorize');
    if (res.ok) {
      setIsGranted(res.ok);
    } else {
     return router.push('/loggedOut');
    }
  };

  useEffect(() => {
    checkAuth();
    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      {isGranted ? (<>
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
      </>) : ''}
    </div>
  )
}

export default LandingPageList
