import { useState, useEffect } from 'react'
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import axios from 'axios';
import Image from 'next/image';

const NavPrivate = ({ userToken }) => {
  const jwtToken = `Bearer ${userToken}`;
  const [profile, setProfile] = useState([]);
  const src = profile.imgUrl;
  const saltSrc = 'https://i.postimg.cc/cHDKNbRd/4.jpg';

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
            className={navStyles.logo}
            title="Profile"
            loader={() => src}
            src={src ? src : saltSrc}
            unoptimized={true}
            alt="Profile Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/landingPage" passHref>
        <div className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Landing-page"
            src="/assets/4.jpg"
            alt="Salt Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <a title="Calender" target='_blank' rel="noreferrer" href="https://calendar.google.com/calendar/u/0/r">
        <div className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Calendar"
            src="/assets/google.png"
            alt="Calendar Icon"
            width={500}
            height={500}
          />
        </div>
      </a>
      <a title="Slack" target='_blank' rel="noreferrer" href="https://join.slack.com/t/salt-sthlm/shared_invite/zt-z7tyhdaa-fMJXwQPiNB97vKgLYXFzxg">
        <div className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Slack"
            src="/assets/slack.png"
            alt="Slack Icon"
            width={500}
            height={500}
          />
        </div>
      </a>
      <Link href="/createAccount" passHref>
        <div className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Create-Account"
            src="/assets/addprofile.png"
            alt="Account Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/salties" passHref>
        <div className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Salties"
            src="/assets/group.png"
            alt="Salties Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
      <Link href="/" passHref>
        <div onClick={handleLogout} className={navStyles.img}>
          <Image
            className={navStyles.logo}
            title="Log-out"
            src="/assets/logout.png"
            alt="Log-out Icon"
            width={500}
            height={500}
          />
        </div>
      </Link>
    </div>
  )
};

export default NavPrivate;
