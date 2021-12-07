import styles from '../styles/icon.module.css';
import Image from 'next/image';

const Courses = ({ course }) => {

  return (
    <div className={styles.icon}>
      <a target='_blank' rel="noreferrer" href={course.link}>
        <div className={styles.row}>
          <span><Image
          src="/assets/co.jpg"
          alt="courses Icon"
          width={500}
          height={500}
        />
        </span>
        <span>{course.description}</span>
        </div>
      </a>
    </div>
  )
};

export default Courses;
