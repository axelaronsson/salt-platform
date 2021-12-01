import NavPrivate from "../components/NavPrivate";
import styles from '../styles/profile.module.css';

const profilePage = () => {
  return (
    <div className={styles.container}>
    <NavPrivate />
      Profile Page
    </div>
  )
};

export default profilePage;
