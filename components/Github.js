import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Github = ({ github }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={github.link}>
        <Image
          src="/assets/45.png"
          alt="github Icon"
          width={500}
          height={500}
        />
        {github.description}
      </a>
    </div>
  )
};

export default Github;
