import styles from '../styles/icon.module.css'

const Slides = ({slide}) => {
  return (
    <div>
      <a target='_blank' href={slide.link}><img className ={styles.icon} src='https://i.postimg.cc/VN6C7t0S/4.png'></img></a>
    </div>
  )
}

export default Slides