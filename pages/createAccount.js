import styles from '../styles/createAccount.module.css'

const createAccount = () => {
  return (
    <div className={styles.container}>
    
    <div className={styles.imgdiv}>
    <img src='https://i.postimg.cc/QxWPMByG/signup-image.jpg'/>
    </div>

    <div className={styles.formdiv}>
    <h1>&lt;/Salt&gt;</h1>
    <form>
      <label><strong>Email</strong></label><br/>
      <input className={styles.input}/>
      <hr/>
      <label><strong>Password</strong></label><br/>
      <input className={styles.input}/>
      <hr/>
      <button className={styles.button} type='submit'>Create Account</button>
    </form>
    </div>

  </div>
  )
};

export default createAccount;
