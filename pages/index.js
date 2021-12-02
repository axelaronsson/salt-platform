import Head from 'next/head'
import Image from 'next/image'
import Creators from '../components/Creators'
import NavHome from '../components/NavHome'
import AboutSalt from '../components/AboutSalt'
import styles from '../styles/Home.module.css'
import AboutPlatform from '../components/AboutPlatform'


export default function Home() {
  return (
    <div className={styles.container}>
      <NavHome />
      <AboutSalt />
      <AboutPlatform />
      <Creators />
    </div>
  )
};

