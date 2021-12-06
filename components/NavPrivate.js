import { useState, useEffect } from 'react'
import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import axios from 'axios';

const NavPrivate = ({ userToken }) => {
  const jwtToken = `Bearer ${userToken}`;
  const [profile, setProfile] = useState([]);

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
      <Link href="/profilePage"><img title="Profile-page" className={navStyles.img__top} src={profile.imgUrl} /></Link>
      <Link href="/landingPage"><img title="Landing-page" className={navStyles.img} src='https://i.postimg.cc/cHDKNbRd/4.jpg' /></Link>
      <a title="Calender" target='_blank' href="https://calendar.google.com/calendar/u/0/r"><img className={navStyles.img} src='https://i.postimg.cc/MHMGJKZY/2.png' /></a>
      <a title="Slack" target='_blank' href="https://join.slack.com/t/salt-sthlm/shared_invite/zt-z7tyhdaa-fMJXwQPiNB97vKgLYXFzxg"><img className={navStyles.img} src='https://i.postimg.cc/ZqbKKLKn/1.png' /></a>
      <Link href="/createAccount"><img title="Create-Account" className={navStyles.img} src='https://i.postimg.cc/qMwDrcfG/222.png' /></Link>
      <Link href="/profilePage"><img className={navStyles.img} title="salties" src='https://i.postimg.cc/vHjdYwp3/vb.png' /></Link>
      <Link href="/"><img title="Log-out" onClick={handleLogout} className={navStyles.img} src='https://i.postimg.cc/1z4Hsp9L/23.jpg' /></Link>
    </div>
  )
};

export default NavPrivate;
