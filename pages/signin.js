import { useState } from 'react';
import NavHome from '../components/NavHome'
import styles from '../styles/signin.module.css';
import axios from 'axios';
import { useRouter } from 'next/router';
import Image from 'next/image';

const signin = () => {
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
      console.log('signin',response);
    })
    .then(() => router.push('/landingPage'));
    setEmail('');
    setPassword('');
  }
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
      <div className={styles.formdiv}>
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
      </div>
    </div>
    </>
  )
};

export default signin;
