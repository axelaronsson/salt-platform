import { useState, useEffect } from 'react'
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const NavPrivate = ({ userToken }) => {
  const jwtToken = `Bearer ${userToken}`;
  const [profile, setProfile] = useState([]);
  const profileSrc = profile.imgUrl;
  const saltSrc = 'https://i.postimg.cc/cHDKNbRd/4.jpg';
  const calendarSrc = 'https://i.postimg.cc/MHMGJKZY/2.png';
  const slackSrc = 'https://i.postimg.cc/ZqbKKLKn/1.png';
  const accSrc = 'https://i.postimg.cc/qMwDrcfG/222.png';
  const saltiesSrc = 'https://i.postimg.cc/vHjdYwp3/vb.png';
  const logoutSrc = 'https://i.postimg.cc/1z4Hsp9L/23.jpg';

  const fetchProfileData = () => {
    fetch('http://localhost:3000/api/users/profile', {
      method: 'GET',
      headers: {
        'Authorization': jwtToken
      }
    }).then(response => response.json())
      .then(res => setProfile(res))
  };

  useEffect(() => {
    fetchProfileData();
    return () => {
    }
  }, [userToken]);

  const handleLogout = async () => {
    console.log('handleLogout');
    await axios.post('/api/users/logout')
      .then(function (response) {
        console.log(response);
      });
  }
  return (
    <div id="mySidenav" className={navStyles.sidenav}>
      <Link href="/profilePage" passHref>
        <div className={navStyles.img__top}>
          <Image
            title="profile"
            loader={() => profileSrc}
            src={profileSrc}
            unoptimized={true}
            alt="profile Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/landingPage" passHref>
        <div className={navStyles.img}>
          <Image
            title="Landing-page"
            loader={() => saltSrc}
            src={saltSrc}
            unoptimized={true}
            alt="salt Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <a title="Calender" target='_blank' rel="noreferrer" href="https://calendar.google.com/calendar/u/0/r">
        <div className={navStyles.img}>
          <Image
            title="calendar"
            loader={() => calendarSrc}
            src={calendarSrc}
            unoptimized={true}
            alt="calendar Icon"
            width={500}
            height={500}
          />
        </div>
      </a>
      <a title="Slack" target='_blank' rel="noreferrer" href="https://join.slack.com/t/salt-sthlm/shared_invite/zt-z7tyhdaa-fMJXwQPiNB97vKgLYXFzxg">
        <div className={navStyles.img}>
          <Image
            title="slack"
            loader={() => slackSrc}
            src={slackSrc}
            unoptimized={true}
            alt="slack Icon"
            width={500}
            height={500}
          />
        </div>
      </a>
      <Link href="/createAccount" passHref>
        <div className={navStyles.img}>
          <Image
            title="Create-Account"
            loader={() => accSrc}
            src={accSrc}
            unoptimized={true}
            alt="account Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/salties" passHref>
        <div className={navStyles.img}>
          <Image
            title="salties"
            loader={() => saltiesSrc}
            src={saltiesSrc}
            unoptimized={true}
            alt="salties Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/" passHref>
        <div onClick={handleLogout} className={navStyles.img}>
          <Image
            title="Log-out"
            loader={() => logoutSrc}
            src={logoutSrc}
            unoptimized={true}
            alt="log-out Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
    </div>
  )
};

export default NavPrivate;
