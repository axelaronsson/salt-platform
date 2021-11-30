import styles from '../styles/icon.module.css'

const Courses = ({course}) => {
    return (
        <div>
            <a target='_blank' href={course.link}><img className ={styles.icon} src='https://i.postimg.cc/pd97jCQq/6.jpg'></img></a>            
        </div>
    )
}

export default Courses
