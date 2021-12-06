import { useState, useEffect } from "react";
import Card from "../components/Card";
import NavPrivate from "../components/NavPrivate";
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
    <div>
    <NavPrivate />
    <div className={styles.title}>
      <h1 className={styles.header}>Salties</h1>
      <h1></h1>
      </div>
      <div className={styles.description}>
      <p className={styles.p}>here you can see a list of Salties who attended your class</p>
      <p></p>
      </div>
  {
    salties.map((saltie, index) => <Card key={index} imgUrl={saltie.imgUrl} name={saltie.name} bio={saltie.bio} date={saltie.admission_date} email={saltie.email} phone={saltie.mobile_number} />)
  }
    </div> 
  )
}

export default salties
