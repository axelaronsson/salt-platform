import { useState, useEffect } from "react";
import Courses from "../components/Courses";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';

const courses = () => {

    const [coursesList, setCoursesList] = useState([])

    const fetchCourses = async () => {
        const res = await fetch('http://localhost:3000/api/courses')
        const allCourses = await res.json();
        setCoursesList(allCourses)
        return allCourses;
    };

    useEffect(() => {
        fetchCourses()
        return () => {
        }
    }, []);

    return (
        <div className={styles.container}>
        <NavPrivate />
            <h1>Courses</h1>
            <div className={styles.icons}>
            {coursesList.map((course, index) => <Courses key={index} course={course} />)}
            </div>
        </div>
    )
}

export default courses
