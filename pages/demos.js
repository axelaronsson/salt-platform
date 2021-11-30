import { useState, useEffect } from "react";
import Demos from "../components/Demos"

const demos = () => {

    const [demosList, setDemosList] = useState([])

    const fetchDemos = async () => {
        const res = await fetch('http://localhost:3000/api/demos')
        const allDemos = await res.json();
        setDemosList(allDemos)
        return allDemos;
    }

    useEffect(() => {
        fetchDemos()
        return () => {
        }
    }, [])
    return (
        <div>
            <h1>Demos</h1>
            {demosList.map(demo => <Demos demo={demo} />)}
        </div>
    )
}

export default demos