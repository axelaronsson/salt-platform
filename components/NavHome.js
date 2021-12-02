import navHomeStyles from '../styles/NavHome.module.css';

const NavHome = () => {
    return (
        <div className={navHomeStyles.navbar}>
        <h2>&lt;/Salt&gt; Platform</h2>
        <a href="/index.js">Home</a>
        <a href="/protips.js">Protips</a>
        <a href="/katas.js">Katas</a>
        <button>Login</button>
      </div>
    )
}

export default NavHome
