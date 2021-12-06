import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Slides = ({slide}) => {
  const src = 'https://i.postimg.cc/VN6C7t0S/4.png';
  
  return (
    <div className ={styles.icon}>
      <a target='_blank' rel="noreferrer" href={slide.link}>
      <Image 
      loader={() => src}
      src={src}
      alt="slides Icon"
      width={500}
      height={500}
      />{slide.description}</a>
    </div>
  )
};

export default Slides;
