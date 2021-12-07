import { useState } from 'react';
import styles from '../styles/createAccount.module.css'
import axios from 'axios';
import NavPrivate from './NavPrivate';
import Image from 'next/image';

const CreateAccountComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile_number, setMobile] = useState('');
  const [admission_date, setAdmission] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAccount = {
      name,
      email,
      password,
      mobile_number,
      admission_date
    }

    axios.post('/api/users', newAccount)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setName('');
    setEmail('');
    setPassword('');
    setMobile('');
    setAdmission('');
  }
  return (
    <div className={styles.container}>
      <NavPrivate />
      <div className={styles.imgdiv}>
        <Image
          src="/assets/signup-image.jpg"
          alt="signup image"
          width={280}
          height={350}
        />
      </div>

      <div className={styles.formdiv}>
        <h1>&lt;/Salt&gt;</h1>
        <form onSubmit={handleSubmit}>
          <label><strong>Name</strong></label><br />
          <input value={name} onChange={({ target: { value } }) => setName(value)} className={styles.input} />
          <hr />
          <label><strong>Email</strong></label><br />
          <input value={email} onChange={({ target: { value } }) => setEmail(value)} className={styles.input} />
          <hr />
          <label><strong>Password</strong></label><br />
          <input type='password' value={password} onChange={({ target: { value } }) => setPassword(value)} className={styles.input} />
          <hr />
          <label><strong>Phone number</strong></label><br />
          <input value={mobile_number} onChange={({ target: { value } }) => setMobile(value)} className={styles.input} />
          <hr />
          <label><strong>Admission date</strong></label><br />
          <input value={admission_date} onChange={({ target: { value } }) => setAdmission(value)} className={styles.input} />
          <hr />
          <button className={styles.button} type='submit'>Create Account</button>
        </form>
      </div>

    </div>
  )
};

export default CreateAccountComponent;
