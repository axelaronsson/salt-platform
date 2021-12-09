import { useState, useEffect } from 'react';
import NavHome from './NavHome'
import styles from '../styles/signin.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const SigninComponent = () => {
  const [errMsg, setErrMsg] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const src = 'https://i.postimg.cc/6qTb47bJ/signin-image.jpg';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const signinUser = {
      email,
      password,
    }
    axios.post('/api/users/login', signinUser)
    .then(function (response) {
    })
    .then(() => router.push('/landingPage'))
    .catch(() => {
      setErrMsg(true);
    });
  }

  useEffect(() => {
    return () => {
      setEmail('');
      setPassword('');
    };
  }, []);

  return (
    <>
      <NavHome />
    <div className={styles.container}>
      <div className={styles.imgdiv}>
        <Image
        loader={() => src}
            src={src}
            unoptimized={true}
            alt="sign-in image"
            width={280}
            height={350}
        />
      </div>
      <div className={styles.formdiv} style={{position: 'relative'}}>
        <h1>&lt;/Salt&gt;</h1>
        <form onSubmit={handleSubmit}>
          <label><strong>Email</strong></label><br />
          <input value={email} onChange={({ target: { value } }) => setEmail(value)} className={styles.input} />
          <hr />
          <label><strong>Password</strong></label><br />
          <input type='password' value={password} onChange={({ target: { value } }) => setPassword(value)} className={styles.input} />
          <hr />
          <button className={styles.button} type='submit'>Log In</button>
          </form>
        { errMsg ? <>
        <h4 style={{color: 'red', position: 'absolute', left: '0px', width: '350px'}}>Cannot verify account. Please check that you supplied correct email and password.</h4>
        </> : ''}
      </div>
    </div>
    </>
  )
};

export default SigninComponent;
