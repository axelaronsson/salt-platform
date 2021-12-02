import styles from '../styles/icon.module.css';

const Github = ({github}) => {
    return (
      <div>
        <a target='_blank' href={github.link}><img className ={styles.icon} src='https://i.postimg.cc/FshsPt7f/45.png'></img></a>
      </div>
    )
  };
  
  export default Github;
  