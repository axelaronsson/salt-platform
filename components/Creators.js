import creatorsStyles from '../styles/creators.module.css';

const Creators = () => {
    return (
        <div className={creatorsStyles.container}>
             <h3>Creators</h3>
           <p>
            We are the team of three freshly graduated Salt students who recognized the high program value and decided to contribute. The Salt programe is unique and requires from each student efforts made toward on-site material use, online research and neat and tidy file management (labs, demos, slides, etc). We have decided to help optimize the experience for present and future students and Salt instructors by centralizing useful and key links and making it easily accessible. 
            </p>
           <div className={creatorsStyles.photos}>
               <div className={creatorsStyles.creator}><img src="https://i.postimg.cc/pVFphzYf/Yazan.png"></img><div><a href="https://github.com/Ras-AlGhoul">Yazan</a></div></div>
               <div className={creatorsStyles.creator}><img src="https://i.postimg.cc/rwmTWLXB/Angie.png"></img><div><a href="https://github.com/AndelijaKaluderovic">Angie</a></div></div>
               <div className={creatorsStyles.creator}><img src="https://i.postimg.cc/26pNPbbY/Axel.png"></img><div><a href="https://github.com/axelaronsson">Axel</a></div></div>
           </div>
        </div>
    )
}

export default Creators
