import React, { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    return (
        <>
            <label>
                Counter {counter}
            </label>
            <button type='button' onClick={() => setCounter(ps => ps + 1)}  >Inc</button>
            <button type='button' onClick={() => setCounter(ps => ps - 1)} >Dec</button>
        </>
    )
}
