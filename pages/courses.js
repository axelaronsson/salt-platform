import { useState, useEffect } from "react";
import Courses from "../components/Courses";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';

const courses = () => {
  const [coursesList, setCoursesList] = useState([]);
  const [courseLink, setCourseLink] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseToggle, setCourseToggle] = useState(false);

  const fetchCourses = async () => {
    const res = await fetch('http://localhost:3000/api/courses')
    const allCourses = await res.json();
    setCoursesList(allCourses);
    return allCourses;
  };

  useEffect(() => {
    fetchCourses()
    return () => {
    }
  }, []);

  const handleCourseFormSubmit = (e) => {
    e.preventDefault();
    console.log(courseDescription, courseLink);
    setCourseToggle(show => !show);
    setCourseLink('');
    setCourseDescription('');
  };

  return (
    <div className={styles.container}>
      <NavPrivate />

      <h1>Courses</h1>
      {!courseToggle && (
        <button className={styles.button} onClick={() => setCourseToggle(show => !show)}>Add Course</button>
      )}
      {courseToggle && (
        <form onSubmit={handleCourseFormSubmit}>
        <label><strong>Description: </strong></label>
          <input value={courseDescription} onChange={({ target: { value } }) => setCourseDescription(value)} />
          <label> <strong>Course Link: </strong></label>
          <input value={courseLink} onChange={({ target: { value } }) => setCourseLink(value)} />
          <button className={styles.button} type='submit'>Add</button>
        </form>
      )}
      <div className={styles.icons}>
        {coursesList.map((course, index) => <Courses key={index} course={course} />)}
      </div>
    </div>
  )
};

export default courses;
