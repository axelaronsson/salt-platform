import React, { useState } from 'react';
import romanStyles from '../styles/roman.module.css'

const Roman = () => {
    const [roman, setRoman] = useState('');
    const [show, setShow] = useState(false)

    const handleChange = e => {
        e.preventDefault();
        setRoman(e.target.value);
    }
    return (
        <div className={romanStyles.container}>
            <h2>Roman Numerals</h2>
            <h3>What are Roman Numerals?</h3>
            <p>The Roman numerals game attempts to create a conversion mechanism from integers to a Roman representation. Number 1, 2 and 3 become I, II and III respectively. 5 and 10 become V and X respectively etc. Type a number to get the Roman conversion.</p>
            <div className={romanStyles.form}>
                <input type="text" id="roman-input" placeholder="Enter a number" onChange={handleChange}></input>
                <button onClick={() => setShow(true)}>Find out</button>
            </div>
            {
                show ?
                    <p>{roman}</p>
                    : null
            }
            <br />
            <p><a href="https://en.wikipedia.org/wiki/Roman_numerals" target="_blank">Learn more</a> about Roman Kata</p>
        </div>
    )
}

export default Roman
