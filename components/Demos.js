import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Demos = ({ demo }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={demo.link}>
      <div className={styles.img}>
        <Image
          src="/assets/demos.png"
          alt="demos Icon"
          width={500}
          height={500}
        />
      </div>
      <p className={styles.description}>{demo.description}</p>
      </a>
    </div>
  )
};

export default Demos;
