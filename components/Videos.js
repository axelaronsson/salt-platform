import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Videos = ({ video }) => {
  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={video.link}>
        <Image
          src="/assets/2.png"
          alt="videos Icon"
          width={500}
          height={500}
        />
        {video.description}</a>
    </div>
  )
};

export default Videos;
