import styles from '../styles/profile.module.css';
import { useState, useEffect } from 'react';
import router from 'next/router';

const loggedOut = () => {

//   const [status, setStatus] = useState(false);

  const goToSignIn = () => {
    router.push('/signin');
  }

  useEffect( async () => {

    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      Please <span onClick={goToSignIn} style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}>sign in</span> to visit this page.
    </div>
  )
};

export default loggedOut;
