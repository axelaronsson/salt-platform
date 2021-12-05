import styles from '../styles/icon.module.css';

const Courses = ({course}) => {
    return (
        <div>
            <a target='_blank' href={course.link}><img className ={styles.icon} src='https://i.postimg.cc/sgLX09nG/co.png'></img>{course.description}</a>            
        </div>
    )
};

export default Courses;
