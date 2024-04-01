import { useState } from 'react'
import classes from './Counter.module.css'

export default function Counter() {

    const [number, setNumber] = useState('')
     // operation that takes a lot of time
     let sum = 0
     for(let i =0; i< 800000000; i++){
         sum += i
     }
     console.log(sum)
    return (
        <div className={classes.main}>
            <header> Counter: </header>
            <input value={number} onChange={
                (e) => {
                    e.preventDefault()
                    setNumber(e.target.value)
            }} />
        </div>
    )
}