import styles from '../styles/icon.module.css'

const Videos = ({ video }) => {
  return (
    <>
      <a target='_blank' href={video.link}><img className ={styles.icon} src='https://i.postimg.cc/6QZTyfkN/2.png'></img></a>
    </>
  )
}

export default Videos
