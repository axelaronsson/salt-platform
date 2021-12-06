import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Videos = ({ video }) => {
  console.log(video);
  const src = 'https://i.postimg.cc/6QZTyfkN/2.png';
  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={video.link}>
        <Image
          loader={() => src}
          unoptimized={true}
          src={src}
          alt="videos Icon"
          width={500}
          height={500}
        />
        {video.description}</a>
    </div>
  )
};

export default Videos;
