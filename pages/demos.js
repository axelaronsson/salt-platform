import { useState, useEffect } from "react";
import Demos from "../components/Demos";
import NavPrivate from "../components/NavPrivate";
import styles from '../styles/pages.module.css';

const demos = () => {
    const [demosList, setDemosList] = useState([])

    const fetchDemos = async () => {
        const res = await fetch('http://localhost:3000/api/demos')
        const allDemos = await res.json();
        setDemosList(allDemos)
        return allDemos;
    };

    useEffect(() => {
        fetchDemos()
        return () => {
        }
    }, []);

    return (
        <div className={styles.container}>
        <NavPrivate />
            <h1>Demos</h1>
            <div className={styles.icons}>
            {demosList.map((demo, index) => <Demos key={index} demo={demo} />)}
            </div>
        </div>
    )
};

export default demos;
