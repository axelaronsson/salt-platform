import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Demos = ({ demo }) => {
  const src = 'https://i.postimg.cc/br04Jv0P/7.jpg';

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={demo.link}>
        <Image
          loader={() => src}
          src={src}
          unoptimized={true}
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
