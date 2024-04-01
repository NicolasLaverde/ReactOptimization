import { useState } from "react";
import Counter from "./Counter";

function InputCO({children}) {
    const [number, setNumber] = useState(0)
    return(
        <>
        <button onClick={() => setNumber(prevNumber => prevNumber + 1) }>
            Update Number: {number}
        </button>
        {children}
        </>
    )
}

export default function SolveBigProccess() {
   
    return (
        <div>
            <InputCO>
                <Counter />
            </InputCO>
        </div>
    )
}