import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Slides = ({ slide }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={slide.link} />
      <div className={styles.img}>
        <Image
          src="/assets/4.png"
          alt="slides Icon"
          width={500}
          height={500}
        />
        </div>
        <p className={styles.description}>{slide.description}</p>
    </div>
  )
};

export default Slides;
