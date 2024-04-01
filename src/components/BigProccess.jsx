import { useState } from "react";
import Counter from "./Counter";

export default function BigProccess() {
    const [number, setNumber] = useState(0)
   
    return (
        <div>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1) }>
                Update Number: {number}
            </button>
            <Counter />
        </div>
    )
}