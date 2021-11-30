import { useState, useEffect } from "react";
import Courses from "../components/Courses"

const courses = () => {

    const [coursesList, setCoursesList] = useState([])

    const fetchCourses = async () => {
        const res = await fetch('http://localhost:4000/api/courses')
        const allCourses = await res.json();
        setCoursesList(allCourses)
        return allCourses;
    }

    useEffect(() => {
        fetchCourses()
        return () => {
        }
    }, [])
    return (
        <div>
            <h1>Courses</h1>
            {coursesList.map(course => <Courses course={course} />)}
        </div>
    )
}

export default courses
