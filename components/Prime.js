import { useState } from 'react';
import primeStyles from '../styles/prime.module.css'

const Prime = () => {
    const [prime, setPrime] = useState([]);
    const [show, setShow] = useState(false)

    const handleChange = e => {
        e.preventDefault();
        const { value } = e.target;
        const primeFactors = [];
        for (let i = 2; i <= value; i++) {
          while (value % i === 0) {
            primeFactors.push(i);
            value /= i;
          }
        }
        setPrime(primeFactors.toString());
        setShow(false);
        return;
    }
    return (
        <div className={primeStyles.container}>
            <h2>Prime Factor</h2>
            <h3>What are Prime Factors?</h3>
            <p>Factors: The numbers which are multiplied to get another number (3 and 5 are the factors of
                15, i.e. 3 × 5 = 15). Prime Factors: A factor which is a prime number and not a composite number is a
                prime factor. Type a number and get Prime Factors.</p>
            <div className={primeStyles.form}>
                <input type="text" placeholder="Enter a number" onChange={handleChange}></input>
                <button onClick={() => setShow(true)}>Find out</button>
            {
                show ?
                <p className={primeStyles.result}>{prime}</p>
                : null
            }
            </div>
            <p className={primeStyles.wiki}><a href="https://en.wikipedia.org/wiki/Prime_number" target="_blank">Learn more</a> about Prime Kata</p>
        </div>
    )
}

export default Prime
