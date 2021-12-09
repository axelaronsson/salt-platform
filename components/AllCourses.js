import { useState, useEffect } from "react";
import Link from "next/dist/client/link";
import router from 'next/router';
import Courses from "../components/Courses";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';
import axios from "axios";

const AllCourses = () => {
  const [role, setRole] = useState('');
  const [isGranted, setIsGranted] = useState(false);
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

  const checkAuth = async () => {
    const res = await fetch('http://localhost:3000/api/users/authorize');
    const userAuth = await res.json();
    if (res.ok) {
      setRole(userAuth.role);
      setIsGranted(res.ok);
      fetchCourses();
    } else {
      router.push('/loggedOut')
    }
  }

  useEffect(() => {
    checkAuth();
    return () => {
    }
  }, []);

  const handleCourseFormSubmit = async (e) => {
    e.preventDefault();
    const newCourse = {
      description: courseDescription,
      link: courseLink
    };
    await axios.post('http://localhost:3000/api/courses', newCourse);
    fetchCourses()
    setCourseToggle(show => !show);
    setCourseLink('');
    setCourseDescription('');
  };

  return (
    <div className={styles.container}>
      {isGranted ? (<>
        <NavPrivate />
        <div className={styles.title}>
          <h1 className={styles.courses__header}>Courses</h1>
          <h1></h1>
        </div>
        <div className={styles.description}>
          <p className={styles.p}>Handpicked courses of multiple topics that our bootcamp is focused on.</p>
          <p></p>
        </div>
        <div className={styles.icons}>
          {coursesList.map((course, index) => <Courses key={index} course={course} />)}
        </div>
        {role === 'admin' ? <>
          {!courseToggle && (
            <button className={styles.button} onClick={() => setCourseToggle(show => !show)}>Add Course</button>
          )}
        </> : ''}
        {courseToggle && (
          <form onSubmit={handleCourseFormSubmit}>
            <label><strong>Description: </strong></label>
            <input value={courseDescription} onChange={({ target: { value } }) => setCourseDescription(value)} />
            <label> <strong>Course Link: </strong></label>
            <input value={courseLink} onChange={({ target: { value } }) => setCourseLink(value)} />
            <button className={styles.button} type='submit'>Add</button>
          </form>
        )}
      </>) : ''}
      <div className={styles.back}>
      <Link href="/landingPage"><a>&lt;-- back to the main page</a></Link>
      </div>
    </div>
  )
};

export default AllCourses;
