import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Demos = ({ demo }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={demo.link}>
        <Image
          src="/assets/7.jpg"
          alt="demos Icon"
          width={500}
          height={500}
        />
        {demo.description}
      </a>

    </div>
  )
};

export default Demos;
