import Link from 'next/link'
import navHomeStyles from '../styles/NavHome.module.css';

const NavHome = () => {
    return (
        <div className={navHomeStyles.wrapper}>
        <div className={navHomeStyles.logo}>
          <h2>&lt;/Salt&gt; Platform</h2>
        </div>
        <nav className={navHomeStyles.navbar}>
        <Link href="/index"><a>Home</a></Link>
        <Link href="/protips"><a>Protips</a></Link>
        <Link href="/katas"><a>Katas</a></Link>
        <Link href="/signin"><a>Sing in</a></Link>
        </nav>
      </div>
    )
}

export default NavHome
