import navStyles from '../styles/Nav.module.css';
import Link from 'next/link';
import axios from 'axios';

// import 

const NavPrivate = () => {
  
  const handleLogout = async()=>{
    console.log('handleLogout');
    axios.post('/api/users/logout')
      .then(function (response) {
        console.log(response);
      });
  }
  return (
      <div id="mySidenav" className={navStyles.sidenav}>
        <Link href="/landingPage"><img className={navStyles.img__top} src='https://i.postimg.cc/cHDKNbRd/4.jpg'/></Link>
        <a target='_blank' href="https://calendar.google.com/calendar/u/0/r"><img className={navStyles.img} src='https://i.postimg.cc/MHMGJKZY/2.png'/></a>
        <a target='_blank' href="https://join.slack.com/t/salt-sthlm/shared_invite/zt-z7tyhdaa-fMJXwQPiNB97vKgLYXFzxg"><img className={navStyles.img} src='https://i.postimg.cc/ZqbKKLKn/1.png'/></a>
        <Link href="/profilePage"><img className={navStyles.img} src='https://i.postimg.cc/65hQsStg/3.png'/></Link>
        <Link href="/createAccount"><img className={navStyles.img} src='https://i.postimg.cc/qMwDrcfG/222.png'/></Link>
        <Link href="/"><img onClick={handleLogout} className={navStyles.img} src='https://i.postimg.cc/1z4Hsp9L/23.jpg'/></Link>
      </div>
  )
};

export default NavPrivate;
