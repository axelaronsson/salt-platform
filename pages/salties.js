import { useState, useEffect } from "react";
import Card from "../components/Card";
import styles from "../styles/salties.module.css"
const salties = ({ userToken }) => {
  const jwtToken = `Bearer ${userToken}`;
  const [salties, setSalties] = useState([]);

  const fetchSalties = () => {
    fetch('http://localhost:3000/api/users/', {
      method: 'GET',
      headers: {
        'Authorization': jwtToken
      }
    }).then(response => response.json())
      .then(res => setSalties(res))
  };
  useEffect(() => {
    fetchSalties();
    return () => {}
  }, [])
  return (
    <div className={styles.container}>
  {
    salties.map((saltie, index) => <Card key={index} imgUrl={saltie.imgUrl} name={saltie.name} bio={saltie.bio}/>)
  }
    </div> 
  )
}

export default salties
