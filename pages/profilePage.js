import NavPrivate from "../components/NavPrivate";
import styles from '../styles/profile.module.css';
import { useState, useEffect } from 'react';
import ImageUpload from '../components/ImageUpload';
import axios from "axios";
import router from 'next/router';

const profilePage = () => {
  const [profile, setProfile] = useState([]);
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  
  const fetchProfileData = () => {
    const userToken ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE5ZjUyNzgzMGNmMzM4NDQzNjAyMDUiLCJpYXQiOjE2Mzg1Mjg2NTZ9.JRKP3iAPkxiYLQ6kuOyLFnn1rvqLSHtTbzB76BVp4MA'
    fetch('http://localhost:3000/api/users/profile',{ 
      method: 'GET', 
      headers: {
        'Authorization': userToken
      }
     }).then(response => response.json())
     .then(res => setProfile(res))
  };

  const handleBio = async(e) => {
    const userToken ='Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWE4OWRiMDQ2ZTVhNzNmZGU3YmE4NDUiLCJpYXQiOjE2Mzg3Mzk4MTR9.n26Epl2a5_r75hjHgvYRrq04Q5FkrJO9WRQjWjhYFkY'
    e.preventDefault();
    const editUser = {
      imgUrl:imageUrl,
      bio
    }
    fetch('http://localhost:3000/api/users/profile',{
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': userToken
      },
      body:JSON.stringify(editUser)
    })
    fetchProfileData();
    setToggle(show=>!show);
    setBio('');
  };

  useEffect(() => {
    fetchProfileData();
    return () => {
    }
  }, [bio]);

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
    <NavPrivate profilepic={profile.imgUrl}/>
      <div className={styles.header}>
      <div>
      <img src={profile.imgUrl} className={styles.img}/>
      </div>
      <div>
      <h2 className={styles.name}>{profile.name}</h2>
      <p className={styles.bio}>{profile.bio}</p>
      {!toggle && (
        <button className={styles.button} onClick={()=> setToggle(show=>!show)}>Edit Profile</button>
      )}
      {toggle && (
      <form onSubmit={handleBio}>
        <label><strong>Bio: </strong></label>
        <input value={bio} onChange={({target:{ value }}) => setBio(value)} />
        <label><strong> Password: </strong></label>
        <input value={password} onChange={({target:{ value }}) => setPassword(value)} />
        <ImageUpload uploadImg={({ target: { value } })=> setImageUrl(value)} />
        <button className={styles.button} type='submit'>Confirm</button>
      </form>
      )}
      </div>
      </div>

      <div className={styles.info}>
      <p className={styles.info}><strong>Email</strong>{profile.email}</p>
      <p className={styles.info}><strong>Mobile</strong>{profile.mobile_number}</p>
      <p className={styles.info}><strong>Admission date</strong>{profile.admission_date}</p>
      </div>
      </>) : ''}
    </div>
  )
};

export default profilePage;
