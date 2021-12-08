import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Github = ({ github }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={github.link} />
      <div className={styles.img}>
        <Image
          src="/assets/45.png"
          alt="github Icon"
          width={500}
          height={500}
        />
        </div>
        <p className={styles.description}>{github.description}</p>
    </div>
  )
};

export default Github;
