import navStyles from '../styles/Nav.module.css';

const NavPrivate = () => {
  return (
      <div id="mySidenav" className={navStyles.sidenav}>
        <a href="#"><img className={navStyles.img} src='https://i.postimg.cc/cHDKNbRd/4.jpg'/></a>
        <a href="#"><img className={navStyles.img} src='https://i.postimg.cc/MHMGJKZY/2.png'/></a>
        <a href="#"><img className={navStyles.img} src='https://i.postimg.cc/ZqbKKLKn/1.png'/></a>
        <a href="#"><img className={navStyles.img} src='https://i.postimg.cc/65hQsStg/3.png'/></a>
      </div>
  )
}

export default NavPrivate
