import React, { useState } from 'react';
import fizzBuzzStyles from '../styles/fizzBuzz.module.css'

const FizzBuzz = () => {
    const [fizzBuzz, setFizzBuzz] = useState('');
    const [show, setShow] = useState(false)

    const handleChange = e => {
        e.preventDefault();
        const { value } = e.target;
        const num = parseInt(value);
        if (num <= 0 || num > 100) {
            setFizzBuzz('Please provide a positive number between 1-100');
            return;
        }
        if (num % 3 === 0 && num % 5 === 0) {
            setFizzBuzz('fizzbuzz');
            return;
        } if (num % 3 === 0) {
            setFizzBuzz('fizz');
            return;
        } if (num % 5 === 0) {
            setFizzBuzz('buzz');
            return;
        } setFizzBuzz(num);
        setShow(false)
        return;
    }
    return (
        <div className={fizzBuzzStyles.container}>
                <h2>FizzBuzz</h2>
                    <h3>What is FizzBuzz?</h3>
                    <p>It's a simple number game in which you count, but replace certain numbers with the words “Fizz”
                        and/or “Buzz”, adhering to certain rules. Instead of numbers divisible by 3, you
                        get “Fizz”, instead of numbers divisible by 5, you get “Buzz” and if it is divisible with 3 and 5, you
                        get "FizzBuzz". Type a number and find out what it is.</p>
                <div className={fizzBuzzStyles.form}>
                    <input type="text" placeholder="Enter a number" onChange={handleChange}></input>
                    <button onClick={() => setShow(true)}>Find out</button>
                    {
                        show ?
                            <p className={fizzBuzzStyles.result}>{fizzBuzz}</p>
                            : null
                    }
                </div>
            <p className={fizzBuzzStyles.wiki}><a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank">Learn more</a> about FizzBuzz Kata</p>
        </div>
    )
}

export default FizzBuzz
