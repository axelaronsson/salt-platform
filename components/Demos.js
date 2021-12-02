import styles from '../styles/icon.module.css';

const Demos = ({demo}) => {
    return (
        <div>
            <a target='_blank' href={demo.link}><img className ={styles.icon} src='https://i.postimg.cc/br04Jv0P/7.jpg'></img></a>
 
        </div>
    )
};

export default Demos;
