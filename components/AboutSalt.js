import saltStyles from '../styles/aboutSalt.module.css'

const AboutSalt = () => {
    return (
        <div className={saltStyles.container}>
            <video className={saltStyles.video} autoPlay muted loop>
                <source src="/assets/coding.mp4" type="video/mp4" />
            </video>
            <div className={saltStyles.content}>
            <h3>About Salt</h3>
            <p>
            Salt stands for Scool of Applied Technology. It is the accelerated boot camp for future developers looking to start their carreer in IT or for current ones in the need of specificly aimed knowledge to equip for practical employment tasks. Salt does not only offer the educational moment but also is supporting the students who graduate from program in finding a work assignment as IT consultant in the field.
            </p>
            <a href="https://salt.study/" target="_blank"><button>Learn more</button></a>
            </div>
        </div>
    )
}

export default AboutSalt
