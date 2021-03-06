import creatorsStyles from '../styles/creators.module.css';
import Image from 'next/image';

const Creators = () => {

  return (
    <div className={creatorsStyles.container}>
      <h3>Creators</h3>
      <p>
      We are a team of three freshly graduated Salt students who have recognized high program value and decided to contribute. The Salt program is unique and requires from each student efforts made toward on-site material use, online research, and neat and tidy file management (labs, demos, slides, etc). We have decided to help optimize the experience for present and future students and Salt instructors by centralizing useful and key links and making them easily accessible.</p>
      <div className={creatorsStyles.photos}>
        <div className={creatorsStyles.creator}>
          <a target='_blank' rel="noreferrer" href="https://github.com/Ras-AlGhoul">
            <Image
              src="/assets/Yazan.png"
              alt="Yazan Icon"
              width={150}
              height={150}
            />
            <span className={creatorsStyles.name}>Yazan</span>
          </a>
          <div>
          </div>
        </div>
        <div className={creatorsStyles.creator}>
          <a target='_blank' rel="noreferrer" href="https://github.com/AndelijaKaluderovic">
            <Image
              src="/assets/Angie.png"
              alt="Angie Icon"
              width={150}
              height={150}
            />
            <span className={creatorsStyles.name}>Angie</span></a>
          <div>
          </div>
        </div>
        <div className={creatorsStyles.creator}>
          <a target='_blank' rel="noreferrer" href="https://github.com/axelaronsson">
            <Image
              src="/assets/Axel.png"
              alt="axel Icon"
              width={150}
              height={150}
            />
            <span className={creatorsStyles.name}>Axel</span></a>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Creators
