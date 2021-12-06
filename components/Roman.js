import React, { useState } from 'react';
import romanStyles from '../styles/roman.module.css'

const Roman = () => {
    const [roman, setRoman] = useState('');
    const [show, setShow] = useState(false)

    const handleChange = e => {
        e.preventDefault();
        const { value } = e.target;
        let num = parseInt(value);

        if (num <= 0 || num > 3000) {
          return 'Please provide a positive number between 1 and 3000';
        }
        if (typeof num === 'string') {
          return 'Please insert a number instead of string type';
        }
        const keys = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
        const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        const romanValues = {};
        keys.forEach((key, i) => { romanValues[key] = values[i]; });
      
        let romanNumber = '';
        for (const property in romanValues) {
          romanNumber += property.repeat(Math.floor(num / romanValues[property]));
          num %= romanValues[property];
        }
        setRoman(romanNumber);
        setShow(false)
        return;
    }
    return (
        <div className={romanStyles.container}>
            <h2>Roman Numerals</h2>
            <h3>What are Roman Numerals?</h3>
            <p>The Roman numerals game attempts to create a conversion mechanism from integers to a Roman representation. Number 1, 2 and 3 become I, II and III respectively. 5 and 10 become V and X respectively etc. Type a number to get the Roman conversion.</p>
            <div className={romanStyles.form}>
                <input type="text" id="roman-input" placeholder="Enter a number" onChange={handleChange}></input>
                <button onClick={() => setShow(true)}>Find out</button>
            {
              show ?
              <p className={romanStyles.result}>{roman}</p>
              : null
            }
            </div>
            <p className={romanStyles.wiki}><a href="https://en.wikipedia.org/wiki/Roman_numerals" target="_blank">Learn more</a> about Roman Kata</p>
        </div>
    )
}

export default Roman
