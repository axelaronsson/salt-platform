import styles from '../styles/profile.module.css';
import React, { useState, useEffect } from 'react';
import ImageUpload from './ImageUpload';
import { useRouter } from 'next/router';
import Image from 'next/image';

const ProfilePageList = ({ userToken }) => {
  const [profile, setProfile] = useState([]);
  const [bio, setBio] = useState('');
  const [password, setPassword] = useState('');
  const [toggle, setToggle] = useState(false);
  const [status, setStatus] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const router = useRouter();
  
  const jwtToken = `Bearer ${userToken}`;
  const src = profile.imgUrl;
  const saltSrc = 'https://i.postimg.cc/cHDKNbRd/4.jpg';
  
  const checkAuth = async () => {
    const res = await fetch('http://localhost:3000/api/github')
    if (res.ok) {
      return setStatus(res.ok);
    } else {
      setStatus(false);
     return router.push('/loggedOut');
    }
  };

  const fetchProfileData = () => {
    fetch('http://localhost:3000/api/users/profile', {
      method: 'GET',
      headers: {
        'Authorization': jwtToken
      }
    }).then(response => response.json())
      .then(res => setProfile(res))
  };

  const handleBio = async (e) => {
    e.preventDefault();
    const editUser = {
      imgUrl: imageUrl,
      bio
    }
    fetch('http://localhost:3000/api/users/profile', {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Authorization': jwtToken
      },
      body: JSON.stringify(editUser)
    })
    fetchProfileData();
    setToggle(show => !show);
    setBio('');
  };

  useEffect(() => {
    fetchProfileData();
    return () => {
    }
  }, [bio]);

  useEffect(() => {
    checkAuth();
    return () => {
    }
  }, []);

  return (
    <div className={styles.container}>
      {status ? (<>
        <div className={styles.title}>
          <h1 className={styles.headar}>Profile Page</h1>
          <h1></h1>
        </div>
        <div className={styles.header}>
          <div  style={{borderRadius: '5px',width: '190px',height: '180px'}}>
            <Image
            title="profile"
            loader={() => src}
            src={src ? src : saltSrc}
            unoptimized={true}
            alt="profile Icon"
            width={500}
            height={500} 
            />
          </div>
          <div>
            <h2 className={styles.name}>{profile.name}</h2>
            <p className={styles.bio}>{profile.bio}</p>
            {!toggle && (
              <button className={styles.button} onClick={() => setToggle(show => !show)}>Edit Profile</button>
            )}
            {toggle && (
              <form onSubmit={handleBio}>
                <label><strong>Bio: </strong></label>
                <input value={bio} onChange={({ target: { value } }) => setBio(value)} />
                <label><strong> Password: </strong></label>
                <input value={password} onChange={({ target: { value } }) => setPassword(value)} />
                <ImageUpload uploadImg={({ target: { value } }) => setImageUrl(value)} />
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
}

export default ProfilePageList
