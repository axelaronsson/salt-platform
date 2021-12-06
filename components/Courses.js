import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Courses = ({ course }) => {
  const src = 'https://i.postimg.cc/sgLX09nG/co.png';

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={course.link}>
        <Image
          loader={() => src}
          src={src}
          unoptimized={true}
          alt="courses Icon"
          width={500}
          height={500}
        />
        {course.description}
      </a>
    </div>
  )
};

export default Courses;
