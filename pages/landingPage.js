import NavPrivate from '../components/NavPrivate';
import Link from 'next/link'
import styles from '../styles/landnPage.module.css';
const landingPage = () => {
  return (
    <div className={styles.container}>
      <NavPrivate />
      <Link href="/courses">
        <a>
          <div className={styles.courses}>
            <h1 className={styles.courses__text}>Courses</h1>
          </div>
        </a>
      </Link>

      <Link href="/labs">
        <a>
          <div className={styles.labs} >
            <h1 className={styles.labs__text}>Labs</h1>
          </div>
        </a>
      </Link>


      <Link href="/demos">
        <a>
          <div className={styles.demos}>
            <h1 className={styles.demos__text}>Demos</h1>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default landingPage
