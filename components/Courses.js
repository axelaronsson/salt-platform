import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Courses = ({ course }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={course.link}>
        <Image
          src="/assets/co.jpg"
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
