import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Github = ({ github }) => {
  const src = 'https://i.postimg.cc/FshsPt7f/45.png';

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={github.link}>
        <Image
          loader={() => src}
          src={src}
          unoptimized={true}
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
