import styles from '../styles/card.module.css'
const Card = ({ imgUrl, name, bio, email, date, phone }) => {
  return (
    <div className={styles.profile_card}>
    <div className={styles.card_header}>
      <div className={styles.pic}>
        <img src={imgUrl} alt=""/>
      </div>
      <div className={styles.name}>{name}</div>
      <div className={styles.desc}>{bio}</div>
    </div>
    <div className={styles.card_footer}>
      <div className={styles.numbers}>
        <div className={styles.item}>
        <span>email</span>
          {email}
        </div>
        <div className={styles.border}></div>
        <div className={styles.item}>
          <span>Mobile</span>
          {phone}
        </div>
        <div className={styles.border}></div>
        <div className={styles.item}>
        <span>admission-date</span>
          {date}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Card
