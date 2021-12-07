import styles from '../styles/profile.module.css';
import router from 'next/router';

const loggedOut = () => {

  const goToSignIn = () => {
    router.push('/signin');
  }

  return (
    <div className={styles.container}>
      Please <span onClick={goToSignIn} style={{textDecoration: 'underline', color: 'blue', cursor: 'pointer'}}>sign in</span> to visit this page.
    </div>
  )
};

export default loggedOut;
