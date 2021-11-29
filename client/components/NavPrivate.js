import navStyles from '../styles/Nav.module.css';

const NavPrivate = () => {
  return (
      <div id="mySidenav" className={navStyles.sidenav}>
        <a href="/"><img className={navStyles.img} src='https://i.postimg.cc/cHDKNbRd/4.jpg'/></a>
        <a target='_blank' href="https://calendar.google.com/calendar/u/0/r"><img className={navStyles.img} src='https://i.postimg.cc/MHMGJKZY/2.png'/></a>
        <a target='_blank' href="https://join.slack.com/t/salt-sthlm/shared_invite/zt-z7tyhdaa-fMJXwQPiNB97vKgLYXFzxg"><img className={navStyles.img} src='https://i.postimg.cc/ZqbKKLKn/1.png'/></a>
        <a href="/profilePage"><img className={navStyles.img} src='https://i.postimg.cc/65hQsStg/3.png'/></a>
      </div>
  )
}

export default NavPrivate;
