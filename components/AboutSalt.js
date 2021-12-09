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
            SALT stands for Scool of Applied Technology. It is the accelerated bootcamp for future developers looking to start their career in IT or for current ones in the need of specifically aimed knowledge to equip for practical employment tasks. Salt does not only offer the educational moment but also it is supporting the students who graduate from the program in finding a work assignment as an IT consultant in the field.            </p>
            <a href="https://salt.study/" rel="noreferrer" target="_blank"><button className={saltStyles.button}>Learn more</button></a>
            </div>
        </div>
    )
}

export default AboutSalt
